import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { ChangeButton } from './style'

export const Button = (props) => {
    
    const { theme } = useContext(ThemeContext)
    
    return (
        <ChangeButton {...props} theme={theme} />
    )
}