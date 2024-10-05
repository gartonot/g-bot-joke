import JokeModel from '../models/Joke.js';

const jokeController = {
  async createJoke(jokeId) {
    const data = {
      jokeId: jokeId
    }
    await JokeModel.createJoke(data);
  },
  async deleteJokeBySessionId(jokeId) {
    await JokeModel.deleteJokeBySessionId(jokeId);
  }
}

export default jokeController;
