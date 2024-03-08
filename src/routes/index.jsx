import { Routes, Route } from "react-router-dom";
import { PokemonDetailedView } from "../pages/pokemonView";
import { Home } from "../pages/home";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon-detailed-view/:name" element={<PokemonDetailedView />} />
        </Routes>
    );
};