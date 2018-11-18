import { JOKE } from '../constants';

export const addJoke = (joke: Object) => ({
  type: JOKE.ADD,
  payload: {
    joke,
  },
});

export const removeJoke = (id: string) => ({
  type: JOKE.REMOVE,
  payload: {
    id,
  },
});
