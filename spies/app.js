const db = require("./db");

let handleSignup = (email, password) => {

    db.saveUser({
        email,
        password
    });

    db.sendRandomID(952995, false);

};

module.exports = {
  handleSignup
};