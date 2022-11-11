import React from 'react';
// { "id": 12, "name": "Adventure" },
const GenreBox = ({ genre, checked, onCheck }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        margin: 1,
      }}
    >
      <input
        type="checkbox"
        id={genre.id}
        checked={checked}
        onChange={onCheck}
      />
      <h5>{genre.name}</h5>
    </div>
  );
};

export default GenreBox;
