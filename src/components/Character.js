import React from 'react';

const Character = props => {
  const { id } = props;

  return (
    <div>
      <h1>Character ID: {id}</h1>
    </div>
  );
};

export default Character;
