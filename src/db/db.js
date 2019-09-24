import Dexie from 'dexie';

const db = new Dexie('todoDB');
db.version(1).stores({
  projects: '++id, title, description, dateStart, dateEnd, isDone'
});

export default db;