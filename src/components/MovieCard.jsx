import React from 'react';
import { BASE_URL } from '../Utils/constants';

// {
//   "adult": false,
//   "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
//   "genre_ids": [14, 28, 12],
//   "id": 464052,
//   "original_language": "en",
//   "original_title": "Wonder Woman 1984",
//   "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
//   "popularity": 2407.318,
//   "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
//   "release_date": "2020-12-16",
//   "title": "Wonder Woman 1984",
//   "video": false,
//   "vote_average": 7,
//   "vote_count": 3437
// },
const MovieCard = ({ movie, genres }) => {
  return (
    <div
      key={movie.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        height: '10%',
        width: '30%',
        minHeight: 500,
        borderRadius: 10,
        // backgroundImage: `url(${BASE_URL + movie.poster_path})`,
        backgroundColor: '#d4cecd50',
        padding: 20,
      }}
    >
      <h4 style={{ textAlign: 'center' }}>{movie.original_title}</h4>
      <p>{String(genres)}</p>
      <img
        src={BASE_URL + movie.poster_path}
        style={{ maxHeight: 200, maxWidth: 100 }}
      />
      <p style={{ marginTop: 5 }}>{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
