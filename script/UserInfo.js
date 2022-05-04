export class UserInfo {
  constructor( {name, sign} ) {
    this._name = document.querySelector(name);
    this._sign = document.querySelector(sign);
  }

  getUserInfo() {
    const user = {};
    user[userNames] = this._name.textContent;
    user[userSign] = this._sign.textContent;
      return user;
  };

  setUserInfo(newName, newSign) {
    this._name = newName;
    this._sign = newSign;
  }
}
