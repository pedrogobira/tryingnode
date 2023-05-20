const conn = require('./config');

module.exports = {
  async init() {
    conn.execute(`
      CREATE TABLE IF NOT EXISTS course (
      id int PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) NOT NULL
      )`);
  },
};