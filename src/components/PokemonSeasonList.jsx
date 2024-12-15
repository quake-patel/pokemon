import PokemonSeasonItem from "./PokemonSeasonItem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const url = "https://pokeapi.co/api/v2/pokemon?offset=150&limit=150";

const seasonsList = [
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
  },
  {
    image:
      "https://i.pinimg.com/736x/c9/47/62/c947620557052453c710cb1815f26f8a.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=386&limit=107",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=493&limit=156",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88",
  },
  {
    image: "https://wallpapercave.com/wp/wp7308573.jpg",
    seasonApi: "https://pokeapi.co/api/v2/pokemon?offset=809&limit=96",
  },
];

const PokemonSeasonList = () => {
  const [singlePokemon, setSinglePokemon] = useState([]);

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setSinglePokemon(
  //       response.data.results.map((item, index) => ({
  //         name: item.name,
  //       }))
  //     );
  //   });
  // }, []);

  // console.log(singlePokemon);

  return (
    <div className='pokemon-season container'>
      {seasonsList.map((season) => (
        <PokemonSeasonItem key={season.seasonApi} season={season} />
      ))}
    </div>
    //   <div className='pokemon-season container'>
    //   {singlePokemon.map((pokemon) => (
    //     <PokemonSeasonItem key={pokemon.name} pokemon={pokemon} />
    //   ))}
    // </div>
  );
};

export default PokemonSeasonList;
