import { useState } from "react"
import { createContext } from "react"

export const themes = {
    light: {
        color: '#000',
        background: '#fff'
    },
    dark: {
        color: '#fff',
        background: '#000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}