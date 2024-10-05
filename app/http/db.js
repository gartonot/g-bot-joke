import sqlite3 from 'sqlite3';

const setupDatabase = async () => {
    const SQLite3 = sqlite3.verbose();
    const db = new SQLite3.Database('jokes.db');

    db.exec(`
        CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            joke_id INTEGER,
            date VARCHAR(50),
            status VARCHAR(50),
            is_draft INTEGER,
            users TEXT
        )
    `);

    return db;
}

export default setupDatabase;
