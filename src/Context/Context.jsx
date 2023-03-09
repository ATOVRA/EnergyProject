import {  createContext, useState } from "react"
export const Context = createContext() 
export const ContextProvider = ({children}) => {
    const [lang, setLang] = useState(() => {
        const savedlang = localStorage.getItem('langs')
        return savedlang || ''
    })
    return(
        <Context.Provider value={{lang, setLang}}>
            {children}
        </Context.Provider>
    )
}