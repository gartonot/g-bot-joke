import setupDatabase from '../db.js';

const JokeModel = {
    tableName: 'jokes',
    db: await setupDatabase(),

    async createJoke(data) {
        const jokeId = data.jokeId;
        const date = data.date;
        const status = data.status;
        const users = data.users;

        this.db.run(`
            INSERT INTO ${this.tableName} 
                (joke_id, date, status, users) 
            VALUES (?, ?, ?, ?)`, 
            [jokeId, date, status, users]
        );
    },

    async deleteJokeBySessionId(jokeId) {
        this.db.run(`DELETE FROM ${this.tableName} WHERE joke_id = ?`, [jokeId]);
    },
}

export default JokeModel;
