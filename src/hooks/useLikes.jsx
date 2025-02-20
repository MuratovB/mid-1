import { useLikesContext } from '../context/LikesContext';

export const useLikes = () => {
  const { likes, toggleLike } = useLikesContext();
  return { likes, toggleLike };
};