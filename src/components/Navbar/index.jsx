import styled from "styled-components"
import Logo from '../../assets/images/logo.svg'
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ThemeTogglerButton } from "../Theme-Toggler-Button/Theme-toggler-button";

export function Navbar({ searchPokemons }) {
    const [inputValue, setInputValue] = useState('');
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isHome = pathname == '/';

    // fazendo pesquisa com tecla 'Enter', atribuindo a função de lidar com o click no botão 'Search'.
    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            handleClick();
        }

    }
    
    // tratando o valor do input  
    function handleChange(event) {
        const { value } = event.target;
        setInputValue(value);
    }

    // tratando o click do botão home
    function handleHomeClick() {
        if (searchPokemons) {
            searchPokemons('');
            setInputValue('');
        }
        navigate('/')
    }

    // tratando o click do botão search para mudar o valor do input
    function handleClick() {
        const lowerCase = inputValue.toLowerCase();
        searchPokemons(lowerCase);
    }

    return (
        <NavigationBar>
            <Img src={Logo} alt="Logo" />
            <InputSection>
                <Homebutton onClick={handleHomeClick}>Home</Homebutton>
                {isHome &&
                    <>
                        <Input value={inputValue} onChange={handleChange} onKeyPress={handleKeyPress} type="text" placeholder="Digite o nome de um pokémon presente na lista..." />
                        <SearchButton onClick={handleClick}>Search</SearchButton>
                    </>
                }
            </InputSection>
            {isHome &&
                <>
                    <Obs>(OBS: O Pokémon deve estar presente na lista)</Obs>
                </>
            }
            <ThemeTogglerButton />
        </NavigationBar>
    )
}


const NavigationBar = styled.div`
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

const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 30px;

    @media only screen and (max-width: 1025px) {
        height: 120px;
        margin: 0;
    }
`

const InputSection = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
`

const Homebutton = styled.button`
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

const Input = styled.input`
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

const SearchButton = styled.button`
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

const Obs = styled.p`
    font-size: 0.8rem;
    color: #fff;
`