const passport = require('passport');
const userRoutes = require('./UsersRoutes');

module.exports = (app, db) => {

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


  app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Tuned matcher!' });
  });


  /////////user routes

  app.get('/users/userInfo', /*passport.authenticate('jwt', {session: false}),*/ userRoutes.getUserInfo);

}
