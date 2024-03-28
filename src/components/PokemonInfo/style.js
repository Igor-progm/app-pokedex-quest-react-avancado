import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`;

export const ContainerFather = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    flex-wrap: wrap;

    @media only screen and (max-width: 769px) {
        margin: 50px;
    }
`

export const Container = styled.div`
    border-radius: 10px;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    background-color: ${props => props.theme.background};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    border: 1px solid ${props => props.theme.background ? "#fff" : "#000"};
    transition: 0.5s;
`
export const Img = styled.img`
    @media only screen and (max-width: 769px) {
        width: 200px;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    gap: 30px;

    @media only screen and (max-width: 769px) {
        flex-direction: column;
        align-items: center;
    }
`

export const H2 = styled.h2`
    text-align: center;
`

export const PokemonAbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const AbilityName = styled.li`
    margin-top: 10px;
    font-weight: bold;
`

export const PokemonAbilities = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PokemonTypes = styled.div`
    display: flex;
    gap: 20px;
`

export const TypeBar = styled.div`
    display: flex;
    gap: 10px;
`

export const PokemonSize = styled.div`
    display: flex;
    gap: 30px;
`

export const PokemonMoves = styled.ul`
  max-height: 300px;
  width: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;

  @media only screen and (max-width: 769px) {
    width: 600px;
  }

  @media only screen and (max-width: 426px) {
    width: 200px;
  }
`;