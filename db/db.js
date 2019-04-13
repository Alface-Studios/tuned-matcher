
class DB {

  constructor() {
    this.userCollection = new Map();


    //insert dummy data
    this.userCollection.set(1, {
      id: 1,
      email: 'pefido@gmail.com',
      name: 'Pedro Durães',
      location: {
        lat: 38.7113943,
        long: -8.972625
      }
    });

    this.userCollection.set(2, {
      id: 2,
      email: 'maria_joaquina@gmail.com',
      name: 'Maria Joaquina',
      location: {
        lat: 38.7113143,
        long: -8.972825
      }
    });


  }


  /////////user related operations
  getUser(id) {
    return new Promise((resolve, reject) => {
      var user = this.userCollection.get(parseInt(id));
      user ? resolve(user) : reject("user not found");
    });
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      var resUser = Array.from(this.userCollection.values()).find((user) => {
        return user.email === email;
      });
      resUser ? resolve(resUser) : reject();
    });
  }
  
}

module.exports = new DB();