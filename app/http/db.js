import sqlite3 from 'sqlite3';

const setupDatabase = async () => {
    const SQLite3 = sqlite3.verbose();
    const db = new SQLite3.Database('jokes.db');

    db.exec(`
        CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            joke_id INTEGER,
            title VARCHAR(255),
            date TIMESTAMP,
            status VARCHAR(50),
            users TEXT
        )
    `);

    return db;
}

export default setupDatabase;
