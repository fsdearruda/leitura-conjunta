import { motion, usePresence } from "framer-motion";
import type { NextPage } from "next";
const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };
import styles from "./styles.module.css"
const LeaderBoardItem: NextPage = ({ children }) => {
  const [isPresent, safeToRemove] = usePresence();

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
    <motion.div className={styles.leaderboardItem} {...animations}>
      <span>{children}</span>
    </motion.div>
  );
};

export default LeaderBoardItem;
