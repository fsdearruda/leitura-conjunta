import { createContext } from "react";

interface UserData {
  name: string;
}

export const UserContext = createContext<UserData | null>(null);
