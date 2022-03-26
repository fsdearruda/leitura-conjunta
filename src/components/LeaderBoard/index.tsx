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
            .map(user => (
              <LeaderBoardItem user={user} key={user.nome} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeaderBoard;
