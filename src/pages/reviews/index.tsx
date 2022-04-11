import { Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Review from "../../components/Review";
import { useEffect, useState } from "react";
import axios from "axios";

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
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quibusdam. ",
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
        <Text fontWeight="bold" fontSize="4xl">
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
