import React, { useState, useEffect } from 'react';

const ToggleButton = (props) => {
  const { children, likes, setLikesArr } = props;
  const [likeState, setLikeState] = useState(false);
  const [city, setCity] = useState(props.city);

  useEffect(() => {
    setLikeState(() => {
      return likes.filter((arrayCity) => arrayCity.Key === city.Key).length > 0;
    });
  }, [setLikeState, city, likes]);

  const toggle = () => {
    setLikeState(!likeState);
    if (likes && likes.length > 0) {
      for (const index in likes) {
        if (likes[index].Key === city.Key) {
          let updatedLikes = likes.filter((likedObj) => likedObj.Key !== city.Key);
          setLikesArr(updatedLikes);
          localStorage.setItem('likes', JSON.stringify(updatedLikes));
          return;
        }
      }
    }
    let likeStateUpdate = [...likes];
    likeStateUpdate.push(city);
    setLikesArr(likeStateUpdate);
    localStorage.setItem('likes', JSON.stringify(likeStateUpdate));
  };

  return children({
    likeState,
    toggle,
  });
};

export default ToggleButton;
