require('dotenv').config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL, // z.B. postgres://user:pass@localhost:5432/db
  migrationsTable: 'migrations',        // Tabelle, die den Migrationsstatus trackt
  dir: 'migrations',                     // Ordner für die Migrationsdateien
};
