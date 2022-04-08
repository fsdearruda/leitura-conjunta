import { Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Review from "../../components/Review";

type ReviewType = {
  bookID: number;
  name: string;
  review: string;
  date: string;
  isNew?: boolean;
  rating: number;
  title: string;
};

const mockReviews: ReviewType[] = [
  { name: "msfisher1", review: "Lorem ipsum dolor sit amet", date: "10/01/2020", bookID: 750929, rating: 5, title: "Lorem ipsum dolor sit amet" },
  { name: "Jesus Cristo", review: "Lorem ipsum dolor sit amet", date: "28/02/2019", bookID: 750929, rating: 3, title: "Lorem ipsum" },
  {
    name: "Nice Colors ",
    title: "Lorem ipsum dolor sit",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores nesciunt modi?",
    date: "04/02/2021",
    bookID: 750929,
    rating: 5,
  },
  {
    name: "Letícia",
    title: "Lorem ipsum dolor",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quibusdam. labore, quidem, quisquam. autem, quisquam. ea, quisquam. never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.",
    date: "28/03/2022",
    isNew: true,
    bookID: 750929,
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text m={10} p={0} fontWeight="bold" fontSize="4xl">
          Resenhas
        </Text>
        {mockReviews.map(review => (
          <Review key={review.name} {...review} />
        ))}
      </Flex>
    </Sidebar>
  );
};

export default Reviews;
