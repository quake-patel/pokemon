import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SeasonInfo = () => {
  const [singlePokemon, setSinglePokemon] = useState([]);
  const location = useLocation();
  const { seasonInfo } = location.state || {};

  useEffect(() => {
    if (!seasonInfo) return;

    // Fetch Pokémon list and their details
    axios
      .get(seasonInfo)
      .then((response) => {
        const fetchDetails = response.data.results.map((item) =>
          axios.get(item.url).then((res) => ({
            name: res.data.name,
            image: res.data.sprites.front_default, // Get Pokémon image
          }))
        );

        // Resolve all promises and update state
        Promise.all(fetchDetails)
          .then((pokemonData) => setSinglePokemon(pokemonData))
          .catch((error) =>
            console.error("Error fetching Pokémon details:", error)
          );
      })
      .catch((error) => console.error("Error fetching season info:", error));
  }, [seasonInfo]);

  const navigate = useNavigate();
  const handleClick = (pokemon) => {
    navigate("/detailPage", { state: { pokemon } });
  };

  return (
    <div>
      {seasonInfo ? (
        <div className='pokemon-season container'>
          {singlePokemon.map((pokemon) => (
            <div
              onClick={() => handleClick(pokemon)}
              key={pokemon.name}
              className='pokemon-item'
            >
              {pokemon.image ? (
                <img src={pokemon.image} alt={pokemon.name} />
              ) : (
                <p>No image available</p>
              )}
              <h3>{pokemon.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No season information available.</p>
      )}
    </div>
  );
};

export default SeasonInfo;
