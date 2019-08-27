import Dexie from 'dexie';

const db = new Dexie('todoDB');
db.version(1).stores({
  projects: '++id, date, title, description, done'
});

export default db;