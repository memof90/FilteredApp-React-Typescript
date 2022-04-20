//import liraries
import { useEffect } from 'react';

interface IFilter {
    activeGenre: number;
    setActiveGenre: (genre: number) => void;
    setFiltered: (filtered: []) => void;
    popular: any;
}
// create a component
const Filter = ({ activeGenre, 
                 setActiveGenre, 
                 setFiltered, 
                 popular }: IFilter) => {
             

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        } 
        const filtered = popular.filter(((movie: { genre_ids: number[]; })  => movie.genre_ids.includes(activeGenre)));
        setFiltered(filtered);
    } , [activeGenre]);


    return (
        <div className="filter-container">
        <button 
          className={activeGenre === 0 ? "active" : ""}
          onClick={() => setActiveGenre(0)}
        >
         All
        </button>
        <button 
          className={activeGenre === 35 ? "active" : ""}
          onClick={() => setActiveGenre(35)}
        >
         Comedy
        </button>
        <button 
          className={activeGenre === 28 ? "active" : ""}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </button>
      </div>
    );
};

// define your styles


//make this component available to the app
export default Filter;
