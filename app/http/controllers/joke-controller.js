import JokeModel from '../models/Joke.js';

const jokeController = {
  async createJoke(jokeId) {
    await JokeModel.createJoke(jokeId);
  }
}

export default jokeController;
