const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error();
    }
    message = message.toUpperCase().split('');
    key = key.toUpperCase()
    .repeat(Math.ceil(message.length / key.length))
    .slice(0, message.length)
    .split('');
    let diff = 0;
    let result = message.map((item, index) => {
      if (this.letters.includes(item)){
        return this.letters[(this.letters.indexOf(item) + this.letters.indexOf(key[index - diff])) % this.letters.length];
      } else {
        diff += 1;
        return item;
      }
    })
    return this.isDirect ? result.join('') : result.reverse().join('');
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error();
    }
    message = message.toUpperCase().split('');
    key = key.toUpperCase()
    .repeat(Math.ceil(message.length / key.length))
    .slice(0, message.length)
    .split('');
    let diff = 0;
    let result = message.map((item, index) => {
      if (this.letters.includes(item)){
        return this.letters[(this.letters.indexOf(item) + this.letters.length - this.letters.indexOf(key[index - diff])) % this.letters.length];
      } else {
        diff += 1;
        return item;
      }
    })
    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
