import setupDatabase from '../db.js';

const JokeModel = {
  db: await setupDatabase(),

  async createJoke(jokeId) {
    this.db.run('INSERT INTO jokes (joke_id) VALUES (?)', [jokeId]);
  }
}

export default JokeModel;
