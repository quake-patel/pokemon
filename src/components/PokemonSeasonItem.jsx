import { useNavigate } from "react-router-dom";

const PokemonSeasonItem = ({ season }) => {
  const navigate = useNavigate();
  const seasonInfo = season.seasonApi;

  const handleClick = (seasonInfo) => {
    navigate("/seasoninfo", { state: { seasonInfo } }); // Redirect to the SeasonInfo page
  };

  return (
    <div className='pokemon-season-card'>
      <div className='pokemon-season-card-inner'>
        <div className='pokemon-season-image'>
          <img src={season.image} alt='' />
          <button onClick={() => handleClick(seasonInfo)}>More Info...</button>
        </div>
      </div>
    </div>
  );
};
// const PokemonSeasonItem = ({ pokemon }) => {
//   return (
//     <div className='pokemon-season-card'>
//       <div className='pokemon-season-card-inner'>
//         <div className='pokemon-season-image'>
//           <h1>{pokemon.name}</h1>
//           <img src='https://wallpapercave.com/wp/wp7308573.jpg' alt='' />
//         </div>
//       </div>
//     </div>
//   );
// };

export default PokemonSeasonItem;
