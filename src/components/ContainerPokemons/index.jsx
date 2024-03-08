import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { typeColors } from "../../utils/typeColors"
import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

// pegando a prop list do componente para mapear os detalhes de cada pokemon
export function ContainerPokemons({ list }) {

    const { theme } = useContext(ThemeContext);


    return (
        <Container theme={theme}>
            {   // mapeando os detalhes de cada pokemon
                list.length > 0 && list.map((pokemon, index) => {
                    return (
                        <Link to={`/pokemon-detailed-view/${pokemon.name}`} key={index}>
                            <Card key={index} theme={theme}>
                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} width={200} height={200} />
                                <TypeBar>
                                    {pokemon.types.map((type, index) => {
                                        return <Type type={type.type.name} key={index}> {type.type.name}</Type>
                                    })}
                                </TypeBar>
                                <Name>{pokemon.name}</Name>
                            </Card>
                        </Link>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
    transition: 0.5s;
`

const Card = styled.div`
    text-align: center;
    border-radius: 10px;
    width: 300px;
    height: 320px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    margin: 10px;
    padding: 20px;
    background-color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.background ? "#fff" : "#000"};
    transition: 0.5s;
`

const TypeBar = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 5px;
`

const Type = styled.p`
    background-color: ${({ type }) => typeColors[type] || "#fff"};
    padding: 5px;
    border-radius: 5px;
`

const Name = styled.h3`
    margin-top: 20px;
`