import { Text, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import type ReviewType from "../../models/Review";
import type { User } from "../../models/User";
import Review from "../../components/Review";
import userIDs from "../../utils/participants";
import useFetch from "../../hooks/useFetch";

const getProfilePictures = () => {
  let profilePics = Promise.all(
    userIDs.map(async id => {
      let data: User = await fetch(`/api/user/${id}`).then(res => res.json());
      return { id: id, url: data.foto };
    })
  );
  return profilePics;
};

const Reviews = () => {
  const { data } = useFetch<ReviewType[][]>("reviews");

  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text fontWeight="bold" fontSize="4xl">
          Resenhas
        </Text>
      </Flex>
      {!data && (
        <Flex flexDirection="row" justifyContent="center" alignItems="center" direction="column">
          <Text fontSize="3xl">Carregando</Text>
          <Spinner ml={5} size="md" />
        </Flex>
      )}
      {data &&
        data.map(user => {
          return user.map(review => {
            return <Review key={`${review.author_id}${review.book_id}`} {...review} />;
          });
        })}
    </Sidebar>
  );
};

export default Reviews;
