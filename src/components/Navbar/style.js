import styled from "styled-components";

export const NavigationBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: #3fa2e4;
    width: 100%;

    @media only screen and (max-width: 1025px) {
        flex-direction: column;
        height: 250px;
  }
`

export const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 30px;

    @media only screen and (max-width: 1025px) {
        height: 120px;
        margin: 0;
    }
`

export const InputSection = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
`

export const Homebutton = styled.button`
    width: 5%;
    margin-right: 3rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 1025px) {
        margin-right: 0;
    }

    @media only screen and (max-width: 769px) {
        margin-right: 2rem;
    }
`

export const Input = styled.input`
    width: 25%;
    height: 30px;
    border-radius: 10px;
    padding: 10px;
    border: 0;

    &:focus {
        outline: 0;
        border: 2px solid red;
    }

    @media only screen and (max-width: 1025px) {
        width: 35%;
    }

    @media only screen and (max-width: 769px) {
        width: 45%;
    }

    @media only screen and (max-width: 427px) {
        width: 50%;
    }
`

export const SearchButton = styled.button`
    width: 10%;
    height: 30px;
    border-radius: 10px;
    border: 0;
    background-color: red;
    cursor: pointer;
    color: #fff;
    padding: 5px;
    opacity: 0.8;
    transition: 0.3s;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 426px) {
        width: 15%;
    }
`

export const Obs = styled.p`
    font-size: 0.8rem;
    color: #fff;
`