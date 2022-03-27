import { motion, usePresence } from "framer-motion";
import { Text, Avatar } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

interface ItemProps {
  user: { nome: string; id: number; skoob?: string; pages: number; foto: string };
}

const LeaderBoardItem: NextPage<ItemProps> = ({ user }) => {
  const [isPresent, safeToRemove] = usePresence();
  const { nome, skoob, pages, foto, id } = user;
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
    <Link href={`https://skoob.com.br/usuario/${id}`} passHref>
      <a>
        {/*  @ts-ignore: Object is possibly 'null'. */}
        <motion.div className={`${styles.leaderBoardItem} ${loggedUser.name === skoob ? styles.highlight : ""}`} {...animations}>
          {/*  @ts-ignore: Object is possibly 'null'. */}
          <Avatar border={"2px solid " + (loggedUser.name === skoob ? "#4299e1" : "#3b5f80")} size="sm" mr={4} name={skoob ? skoob.charAt(0) : nome.charAt(0)} src={foto} />
          <Text as="span">
            {skoob ? skoob : nome}
            <Text as="span" className={styles.points}>
              {pages}{" "}
              <Text as="span" className={styles.pages}>
                páginas
              </Text>
            </Text>
          </Text>
        </motion.div>
      </a>
    </Link>
  );
};

export default LeaderBoardItem;
