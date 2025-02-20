import React, { createContext, useState, useContext } from 'react';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);

  const toggleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => useContext(LikesContext);