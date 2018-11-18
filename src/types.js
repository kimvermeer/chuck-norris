export type Joke = {
  id: number,
  joke: string,
  categories: string[],
};

export type ImmutableJoke = {|
  id: number,
  joke: string,
|};

export type JokeMap = Map<string, ImmutableJoke>;
