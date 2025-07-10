import { UserContext } from "./UserContext";
import type {ReactNode} from "react";

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const user = { userId: "2" };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};


