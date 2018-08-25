let saveInfo = (bool) => {

    return new Promise((resolve, reject) => {
        if (bool === true) {
            resolve({text: "Hello"});
        } else {
            reject();
        }
    });

};

let displayModifiedInfo = (text) => {

    return text + " World !";

};

module.exports = {
  saveInfo,
  displayModifiedInfo
};