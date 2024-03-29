import { Navbar } from "../../components/Navbar";
import { getListName } from "../../services/request-API";
import { useState, useEffect } from "react";
import { ContainerPokemons } from "../../components/ContainerPokemons";
import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { LoadButton, LoadSection } from "./style";
export function Home() {
    const [count, setCount] = useState(10);
    const [pokemonListShow, setPokemonListShow] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState(null);

    const isDisabled = !!pokemonSearch;
   
    // filtrando os pokemons da lista de pokemons baseado no valor de str
    function searchPokemons(str) {
        const result = pokemonListShow.filter(pokemon => pokemon.name.includes(str));
        setPokemonSearch(result);

        // se o valor de str for vazio, limpa a lista de pokemons
        const noResult = pokemonListShow.some(pokemon => pokemon.name.includes(str));

        // se não encontrar nenhum pokemon, mostra uma mensagem
        if (str === '' || !noResult) {
            setPokemonSearch(null)
            !noResult && alert('Pokémon não encontrado na lista!')
        }
    }

    // buscando lista de pokemons com base no valor de count e depois unindo os valores já presentes na lista de pokemons aos
    // novos adquiridos
    async function getNames() {
        const pokemonDetails = await getListName(count);
        setPokemonListShow([...pokemonListShow, ...pokemonDetails]);
    }

    // tratando ciclo de vida do componente e chamando a função getNames quando o valor de count muda
    useEffect(() => { getNames() }, [count]);

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Navbar searchPokemons={searchPokemons} />
            <ContainerPokemons list={pokemonSearch?.length > 0 ? pokemonSearch : pokemonListShow} />
            <LoadSection theme={theme}>
                <LoadButton onClick={() => setCount(count + 10)} disabled={isDisabled}>Load More</LoadButton>
            </LoadSection>
        </>
    );
}