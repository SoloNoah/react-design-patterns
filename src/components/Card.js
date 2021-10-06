import React from 'react';
import ToggleButton from './ToggleButton';

const Card = ({ city, likes, setLikesArr }) => {
  return (
    <div>
      <h1>{city.LocalizedName}</h1>
      <ToggleButton
        city={city}
        likes={likes}
        setLikesArr={setLikesArr}
        render={({ likeState, toggle }) => (
          <div>
            <button onClick={toggle}>
              <span>{!likeState ? 'Like' : 'Dislike'}</span>
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Card;
