const db = require("./db");

let saveModifyShow = (bool, callback) => {

    db.saveInfo(bool).then(

        (res) => {
            callback(db.displayModifiedInfo(res.text));
        },

        () => {
            console.log("Error in saving");
        }

    );

};

let add = (a, b) => a + b;

let square = (a) => a * a;

let setName = (user, fullName) => {
  let names = fullName.split(" ");

  user.firstName = names[0];
  user.lastName = names[1];

  return user;

};

let asyncSquare = (a) => {

  return new Promise((resolve, reject) => {
    if (a < 11) {
      setTimeout(() => {
          resolve(a * a);
      }, 2000);
    } else {
        reject(`${a} is more than 10.`);
    }
  });

};

let asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare,
  saveModifyShow
};