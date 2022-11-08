import React,{createContext, useState} from 'react';
//initializing state


export const GlobalContext = createContext();

// Provider Component

export const GlobalProvider = ({children}) => {
    const [das,setDas] = useState({})
    const [yes,setYes] = useState(true)
    return(
        <GlobalContext.Provider value={{
            das,
            setDas,
            yes,
            setYes
        }}>
            {children}
        </GlobalContext.Provider>
    )

}