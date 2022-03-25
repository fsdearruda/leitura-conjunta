import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import LeaderBoardItem from "../LeaderBoardItem";
import type User from "../../models/User";

const LeaderBoard: NextPage<{ users: User[] }> = ({ users }) => {
  const [items, setItems] = useState(users);
  const [sorter, setSorter] = useState(true);
  // Funções de teste
  console.log(users)
  return (
    <div>
      <div className="center">
        <AnimatePresence>
          {[...items]
            .sort((a, b) => (sorter ? b.pages - a.pages : a.pages - b.pages))
            .map(item => (
              <LeaderBoardItem nome={item.skoob ? item.skoob : item.nome} pages={item.pages} key={item.nome} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeaderBoard;
