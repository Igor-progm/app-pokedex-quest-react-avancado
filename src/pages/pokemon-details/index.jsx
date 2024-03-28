import { getAbilityDescription } from "../../services/request-API";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../../components/PokemonInfo";

export const PokemonDetailedView = () => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      const pokemon = await getAbilityDescription(name);
    setPokemonDetail(pokemon);
    })()
  }, []);
  
  return (
    <>
      <Navbar />
      {pokemonDetail && <PokemonInfo pokemon={pokemonDetail} />}
    </>
  )

}