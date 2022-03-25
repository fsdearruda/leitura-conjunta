import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import LeaderBoard from "../components/LeaderBoard";
import type User from "../models/User";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data } = useFetch<User[]>("users");

  if (!data) {
    return <h3 className="title center">Loading</h3>;
  }
  return (
    <>
      <h1 className="title center">Ranking</h1>
      <LeaderBoard users={data} />
    </>
  );
};

export default Home;
