import setupDatabase from '../db.js';

const JokeModel = {
  tableName: 'jokes',
  db: await setupDatabase(),

  async createJoke(data) {
    const jokeId = data.jokeId;

    this.db.run(`INSERT INTO ${this.tableName} (joke_id) VALUES (?)`, [jokeId]);
  },
  async deleteJokeBySessionId(jokeId) {
    this.db.run(`DELETE FROM ${this.tableName} WHERE joke_id = ?`, [jokeId]);
  },
}

export default JokeModel;
