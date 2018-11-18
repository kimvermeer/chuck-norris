export type State = {
  isLoading: boolean,
  jokes: Joke[],
};

export type Joke = {
  id: number,
  joke: string,
  categories: string[],
};
