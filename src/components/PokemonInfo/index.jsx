import { styled, createGlobalStyle, ThemeProvider } from "styled-components";
import { typeColors } from "../../utils/typeColors";
import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"


export const PokemonInfo = ({ pokemon }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <>
                <ContainerFather>
                    <Container theme={theme}>


                        <H2>{pokemon.name}</H2>

                        <Info>
                            <Img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} width={300} height={300} />

                            <PokemonAbilitiesContainer>
                                <h4>Abilities</h4>

                                <ul>
                                    {
                                        pokemon.abilities.map((ability, index) =>
                                            <PokemonAbilities key={index}>
                                                <AbilityName>{ability.ability.name}</AbilityName>
                                                <li>{ability.ability.description}</li>
                                            </PokemonAbilities>
                                        )
                                    }
                                </ul>
                                
                                <GlobalStyle></GlobalStyle>

                                <PokemonTypes>
                                    <h4>Types:</h4>
                                    <TypeBar>
                                        {
                                            pokemon.types.map((type, index) => {
                                                return <Type key={index} type={type.type.name}> {type.type.name}</Type>
                                            })
                                        }
                                    </TypeBar>
                                </PokemonTypes>

                                <PokemonSize>
                                    <p>Height(altura): {pokemon.height / 10} m</p>
                                    <p>Weight(peso): {pokemon.weight / 10} kg</p>
                                </PokemonSize>
                            </PokemonAbilitiesContainer>

                            <div>
                                <h4>Moves</h4>
                                <PokemonMoves>
                                    {
                                        pokemon.moves.map((move, index) => <li key={index}>{move.move.name}</li>)
                                    }
                                </PokemonMoves>
                            </div>
                        </Info>

                    </Container>
                </ContainerFather>
            </>
        </ThemeProvider>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`;

const ContainerFather = styled.div`
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

const Container = styled.div`
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
const Img = styled.img`
    @media only screen and (max-width: 769px) {
        width: 200px;
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    gap: 30px;

    @media only screen and (max-width: 769px) {
        flex-direction: column;
        align-items: center;
    }
`

const H2 = styled.h2`
    text-align: center;
`

const PokemonAbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const AbilityName = styled.li`
    margin-top: 10px;
    font-weight: bold;
`

const PokemonAbilities = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const PokemonTypes = styled.div`
    display: flex;
    gap: 20px;
`

const TypeBar = styled.div`
    display: flex;
    gap: 10px;
`

const PokemonSize = styled.div`
    display: flex;
    gap: 30px;
`

const PokemonMoves = styled.ul`
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

const Type = styled.p`
    background-color: ${({ type }) => typeColors[type] || "#fff"};
    padding: 5px;
    border-radius: 5px;
`