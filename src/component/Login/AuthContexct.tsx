import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

interface Authcontexttype {
    userdata: User | null;
    saveUserdata: () => void;
}

export const Authcontext = createContext<Authcontexttype | null>(null);

interface Authcontextproviderprops {
    children: ReactNode;
}

export default function Authcontextprovider({ children }: Authcontextproviderprops) {
    const [userdata, setuserdata] = useState<User | null>(null);

    const saveUserdata = () => {
        const encodedToken = localStorage.getItem("uertoken");
        if (encodedToken) {
            try {
                const decodedToken = jwtDecode<User>(encodedToken);
                setuserdata(decodedToken);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    };

    useEffect(() => {
        if (localStorage.getItem("uertoken")) {
            saveUserdata();
        }
    }, []);

    return (
        <Authcontext.Provider value={{ userdata, saveUserdata }}>
            {children}
        </Authcontext.Provider>
    );
}
