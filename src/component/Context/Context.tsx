import { createContext, ReactNode, useState } from "react";

export interface Contexttype {
    counter: number;
    increaseCount: () => void;
    decreaseCount: () => void;
}

export const ContextShar = createContext<Contexttype | null>(null)

interface ContextSharProviderprops {
    children: ReactNode
}
export default function ContextSharProvider({ children }: ContextSharProviderprops) {

    const [counter, setcounter] = useState<number>(0)

    const increaseCount = () => {
        setcounter((prev) => prev + 1)
    };
    const decreaseCount = () => {
        setcounter((prev) => prev - 1)
    }
    return (
        <ContextShar.Provider value={{ counter, increaseCount, decreaseCount }}>
            {children}
        </ContextShar.Provider>
    )
}