import PokemonSeasonItem from "./PokemonSeasonItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SeasonInfo = () => {
  const [singlePokemon, setSinglePokemon] = useState([]);
  const location = useLocation();
  const { seasonInfo } = location.state || {};

  useEffect(() => {
    axios.get(seasonInfo).then((response) => {
      setSinglePokemon(response.data.results.map((item) => console.log(item)));
    });
  }, []);

  return (
    <div>
      {seasonInfo ? (
        //
        <div className='pokemon-season container'>
          {singlePokemon.map((pokemon) => (
            <PokemonSeasonItem key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <p>No season information available.</p>
      )}
    </div>
  );
};

export default SeasonInfo;
