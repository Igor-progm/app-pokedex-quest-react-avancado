// buscando lista de pokemons baseando-se no valor atual de count
export const getListName = async (count) => {
    const number = count - 10

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${number}`);
    const data = await response.json();
    const pokemons = await getPokemon(data.results)
    return pokemons
}

// buscando os detalhes dos pokemons dentro da url de cada pokemon
export const getPokemon = async (list) => {
    if(typeof list === 'string') {
        const url = `https://pokeapi.co/api/v2/pokemon/${list}`;
        const response = await fetch(url);
        return await response.json();
    }

    const result = await Promise.all(list.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data
    }))
    return result
}

// buscando a descricão da habilidade de cada pokemon e armazenando-a no objeto na propriedade 'ability'
export const getAbilityDescription = async (name) => {
    const pokemonName = await getPokemon(name);

    for(const ability of pokemonName.abilities) {
        const url = ability.ability.url
        const response = await fetch(url);
        const data = await response.json();
        const description = data.effect_entries.filter((ability) => ability.language.name === 'en')[0].effect;
        ability.ability.description = description
    }
    return pokemonName
}