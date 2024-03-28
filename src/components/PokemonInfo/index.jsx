import { ThemeProvider } from "styled-components";
import { typeColors } from "../../utils/typeColors";
import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components";
import { GlobalStyle, ContainerFather, Container, Img, Info, H2, PokemonAbilitiesContainer, AbilityName, PokemonAbilities, PokemonTypes, TypeBar, PokemonSize, PokemonMoves } from "./style"


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

export const Type = styled.p`
    background-color: ${({ type }) => typeColors[type] || "#fff"};
    padding: 5px;
    border-radius: 5px;
`