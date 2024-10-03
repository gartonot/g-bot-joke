import sqlite3 from 'sqlite3';

const setupDatabase = async () => {
    const SQLite3 = sqlite3.verbose();
    const db = new SQLite3.Database('jokes.db');

    // TODO: при добавлении полей перезаписывать файл (переписать на миграции)
    db.run(`
        CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            joke_id INTEGER
        )
    `);

    return db;
}

export default setupDatabase;
