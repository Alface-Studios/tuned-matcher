const db = require('../db/db');

class UserRoutes {
  constructor() {

  }

  // getUserInfo(req, res, next) {
  //   db.getUser(req.user.id).then((user) => {
  //     res.send(user);
  //   }).catch(() => {
  //     res.status(404).send("User not found");
  //   });
  // }

  getUserInfo(req, res, next) {
    if(req.query && req.query.id) {
      db.getUser(req.query.id).then((user) => {
        res.send(user);
      }).catch(() => {
        res.status(404).send("User not found");
      });
    } else {
      res.status(400).send("bad request");
    }
  }
}

module.exports = new UserRoutes();
