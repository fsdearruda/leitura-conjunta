import { Text, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import type ReviewType from "../../models/Review";
import type { User } from "../../models/User";
import Review from "../../components/Review";
import userIDs from "../../utils/participating";

const isNew = (date: string): boolean => {
  const dateArray = date.split("/");
  const dateObject = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]));
  const currentDate = new Date();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const diff = currentDate.getTime() - dateObject.getTime();
  return diff < oneWeek;
};

const getProfilePictures = () => {
  let profilePics = Promise.all(
    userIDs.map(async id => {
      let data: User = await fetch(`/api/user/${id}`).then(res => res.json());
      return { id: id, url: data.foto };
    })
  );
  return profilePics;
};

interface ReviewProp extends ReviewType {
  profilePicture: string | null;
  isNew: boolean;
}

const Reviews = () => {
  const [loaded, setLoaded] = useState(false);
  const [reviews, setReviews] = useState<ReviewProp[]>([]);

  useEffect(() => {
    if (loaded) return;
    const fetchReviews = async () => {
      const pics = await getProfilePictures();
      userIDs.map(async id => {
        const data: ReviewType[] = await fetch(`/api/reviews/${id}`).then(res => res.json());
        data.map(review => {
          const newReview: ReviewProp = {
            ...review,
            author_id: id,
            profilePicture: pics.find(pic => pic.id === id)?.url ?? null,
            isNew: isNew(review.date),
          };
          setReviews(prevReviews => [...prevReviews, newReview]);
        });
      });
      setLoaded(true);
    };
    fetchReviews();
  });

  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text fontWeight="bold" fontSize="4xl">
          Resenhas
        </Text>
      </Flex>
      {!loaded && (
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Text fontSize="3xl">Carregando</Text>
          <Spinner size="md" />
        </Flex>
      )}
      {reviews.map(review => {
        return <Review key={`${review.author_id}${review.book_id}`} {...review} />;
      })}
    </Sidebar>
  );
};

export default Reviews;
