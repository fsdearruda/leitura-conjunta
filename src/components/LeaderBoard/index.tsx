import { AnimatePresence } from "framer-motion";
import LeaderBoardItem from "../LeaderBoardItem";
import type {User} from "../../models/User";

const LeaderBoard = ({ users }: {users: User[]}) => {
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
