import JokeModel from '../models/Joke.js';
import constants from '../../constants/index.js';

const jokeController = {
    async createJoke(jokeId) {
        const data = {
            jokeId: jokeId,
            date: Date.now(),
            status: constants.status.START,
            users: JSON.stringify([]),
        }
        await JokeModel.createJoke(data);
    },
    
    async deleteJokeBySessionId(jokeId) {
        await JokeModel.deleteJokeBySessionId(jokeId);
    }
}

export default jokeController;
