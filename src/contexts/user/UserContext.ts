import { createContext } from "react";

export type UserContextType = {
    userId: string;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
