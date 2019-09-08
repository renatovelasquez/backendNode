const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] no hay usuario o mensaje");
      return reject("Los datos son incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = { addMessage, getMessages };
