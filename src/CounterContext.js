import { createContext, useState } from "react";

export let CounterContext = createContext(0);

export function CounterContextProvider(props)
{
    let [count , setCount] = useState(0)
    
    return <CounterContext.Provider value={{count}}>
        {props.children}
    </CounterContext.Provider>
}