import { Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import type ReviewType from "../../models/Review";
import Review from "../../components/Review";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const Reviews = () => {
  const { data } = useFetch<ReviewType[][]>("reviews");

  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text fontWeight="bold" fontSize="4xl">
          Resenhas
        </Text>
      </Flex>
      {(data &&
        data.map(user => {
          return user.map(review => {
            return <Review key={`${review.author_id}${review.book_id}`} {...review} />;
          });
        })) || <Loading />}
    </Sidebar>
  );
};

export default Reviews;
