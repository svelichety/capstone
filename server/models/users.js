const db = require('../database');

class users {
  static retrieveAll (callback) {
    db.query('SELECT user_name from users', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (user, callback) {
    db.query('INSERT INTO users (user_name) VALUES ($1)', [user], (err, res) => {
      if (err.error)
        return callback(err);
        
      callback(res);
    });
  }
}

module.exports = users;