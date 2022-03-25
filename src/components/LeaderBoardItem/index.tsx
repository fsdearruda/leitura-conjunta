import { motion, usePresence } from "framer-motion";
import type { NextPage } from "next";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

interface ItemProps {
  nome: string;
  pages: number;
}

const LeaderBoardItem: NextPage<ItemProps> = ({ nome, pages }) => {
  const [isPresent, safeToRemove] = usePresence();

  const loggedUser = useContext(UserContext);

  const animations = {
    layout: true,
    initial: "out",
    animate: isPresent ? "in" : "out",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };

  return (
    // @ts-ignore: Object is possibly 'null'.

    <motion.div className={`${styles.leaderBoardItem} ${loggedUser.name === nome ? styles.highlight : ""}`} {...animations}>
      <span>
        {nome}
        <span className={styles.points}>
          {pages} <span className={styles.pages}>páginas.</span>
        </span>
      </span>
    </motion.div>
  );
};

export default LeaderBoardItem;
