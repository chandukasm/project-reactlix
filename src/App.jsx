import { useEffect, useState } from 'react';
import { fetchGenres, fetchMovies } from './api'; // you may add functionality to these functions, but please use them
import GenreBox from './components/GenreBox';
import MovieCard from './components/MovieCard';
import './styles.css'; // have a look at this file and feel free to use the classes

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchMovies();
    const movies = await res.json();
    const resp = await fetchGenres();
    const genres = await resp.json();
    setGenres(genres);
    setMovies(movies);
  };

  const IsGenreIn = (genre_ids) => {
    //checking whether the movie has selected genres
    let shouldDispaly = false;
    genre_ids.map((id) => {
      if (checked.includes(id)) {
        shouldDispaly = true;
      }
    });
    return shouldDispaly;
  };

  // displaying movies
  const displayMovies = () => {
    if (checked.length == 0) {
      //displaying all if checked array doesnt have any movies
      return movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genres={movie.genre_ids.map(
            (id) => genres.filter((genre) => genre.id === id)[0].name
          )}
        />
      ));
    } else {
      return movies.map(
        (movie) =>
          IsGenreIn(movie.genre_ids) && (
            <MovieCard
              movie={movie}
              genres={movie.genre_ids.map(
                (id) => genres.filter((genre) => genre.id === id)[0].name
              )}
            />
          )
      );
    }
  };

  // checkbox functionality handling
  const handleCheck = (genreId) => {
    if (checked.includes(genreId)) {
      return setChecked(checked.filter((id) => id !== genreId));
    }
    setChecked([...checked, genreId]);
  };

  // displaying the genres
  const displayGenres = () => {
    //checking genres are fetched
    if (genres.length > 0) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {genres.map((genre) => (
            <GenreBox
              key={genre.id}
              genre={genre}
              onCheck={() => handleCheck(genre.id)}
              checked={checked.includes(genre.id)}
            />
          ))}
          <button onClick={() => setChecked([])}>reset</button>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  };

  return (
    <div>
      <h3>Reactlix</h3>
      {displayGenres()}
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {displayMovies()}
      </div>
    </div>
  );
}
