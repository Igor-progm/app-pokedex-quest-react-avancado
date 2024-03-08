import styled from 'styled-components'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

export const Button = (props) => {
    
    const { theme } = useContext(ThemeContext)
    
    return (
        <ChangeButton {...props} theme={theme} />
    )
}

const ChangeButton = styled.button`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    border: 0;
    border-radius: 10px;
    padding: 5px;
    width: 120px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
    margin-right: 25px;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 20px;
        margin-right: 0;
    }
`