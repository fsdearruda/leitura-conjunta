import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import LeaderBoardItem from "../LeaderBoardItem";
import type User from "../../models/User";

const LeaderBoard: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <div>
      <div className="center">
        <AnimatePresence>
          {[...users]
            .sort((a, b) => b.pages - a.pages)
            .map(item => (
              <LeaderBoardItem nome={item.skoob ? item.skoob : item.nome} pages={item.pages} key={item.nome} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeaderBoard;
