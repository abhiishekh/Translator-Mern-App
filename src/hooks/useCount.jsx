import { createContext, useContext, useState } from "react";

const Count = createContext()

export const CountProvider =({children})=>{
    const [count, setCount]= useState(0)

    return(
        <Count.Provider
        value={{
            count,
            setCount
        }}
        >
            {children}
        </Count.Provider>
    )
}

export const useCount =()=>{
    const context = useContext(Count)
    if(!context){
        throw new Error(" kuchh to galat ho gya hai")
    }
    return context
}