import styled from "styled-components"

export const LoadSection = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    background-color: ${props => props.theme.background};
`

export const LoadButton = styled.button`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: 0;
    background-color: #3fa2e4;
    margin-top: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
    color: #fff;

    &:hover {
        opacity: 1;
    }
`