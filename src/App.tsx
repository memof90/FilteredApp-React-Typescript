import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import Filter from './components/Filter';
import Movie from './components/Movie';

function App() {

  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]);
  const [typeGender, setTypeGender] = useState(0);

  const fethData = async () => {
    const response = fetch("https://api.themoviedb.org/3/movie/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1");
    const movies = (await response).json();
    const { results } = await movies;
    console.log(results);
    setPopular(results);
    setFilter(results);
  }

  useEffect(() => {
    fethData();
  } , []);

  return (
    <div className="App">
      <Filter 
        popular={popular}
        setFiltered={setFilter}
        activeGenre={typeGender}
        setActiveGenre={setTypeGender}
      />
      <motion.div
        layout 
        className="popular-movies"
      >
        <AnimatePresence>
          {filter.map((movie: any) => (
            <Movie 
              key={movie.id}
              movie={movie}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App
