import Logo from '../../assets/images/logo.svg'
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ThemeTogglerButton } from "../Theme-Toggler-Button/Theme-toggler-button";
import { NavigationBar, Img, InputSection, SearchButton, Homebutton, Input, Obs } from "./style";

export function Navbar({ searchPokemons }) {
    const [inputValue, setInputValue] = useState('');
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isHome = pathname == '/';

    // fazendo pesquisa com tecla 'Enter', atribuindo a função de lidar com o click no botão 'Search'.
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
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