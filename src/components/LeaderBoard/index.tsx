import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import LeaderBoardItem from "../LeaderBoardItem";
import styles from "./styles.module.css";
interface User {
  name: string;
  points: number;
}

const getUserInfo = () => {
  const users: User[] = [
    {
      name: "rapoxo",
      points: 3,
    },
    {
      name: "msfisher",
      points: 13,
    },
    {
      name: "kabizinha",
      points: 9,
    },
    {
      name: "xsunlol",
      points: 5,
    },
  ];
  return users;
};

const LeaderBoard: NextPage = () => {
  const [items, setItems] = useState(getUserInfo());
  const [sorter, setSorter] = useState(true);
  // Funções de teste
  const addTo = (name: string) => {
    let temp = [...items];
    let user = temp.find(item => item.name === name);
    if (!user) return;
    user.points += 1;
    setItems(temp);
  };

  const reset = () => {
    setItems(getUserInfo());
    console.log(getUserInfo());
  };

  const changeSorter = () => {
    setSorter(!sorter);
  };

  return (
    <div>
      <h1 className={styles.title}>Ranking</h1>
      <div className={`${styles.leaderboard} ${styles.center}`}>
        <AnimatePresence>
          {[...items]
            .sort((a, b) => (sorter ? b.points - a.points : a.points - b.points))
            .map(item => (
              <LeaderBoardItem key={item.name}>
                {item.name} {item.points}
              </LeaderBoardItem>
            ))}
        </AnimatePresence>
      </div>
      <h3 className={styles.title}>Ações</h3>
      <div className={`${styles.row} ${styles.center}`}>
        <button className={styles.button} onClick={changeSorter}>
          Pontos {sorter ? "↑" : "↓"}{" "}
        </button>
        <button className={styles.button} onClick={() => addTo("rapoxo")}>
          Adicionar
        </button>
        <button className={styles.button} onClick={reset}>
          Redefinir
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
