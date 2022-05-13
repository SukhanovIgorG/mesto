export class UserInfo {
  constructor( {nameSelector, signSelector} ) {
    this._userName = document.querySelector(nameSelector);
    this._userSign = document.querySelector(signSelector);
  }

  getUserInfo() {
    const user = {name:this._userName.textContent, sign:this._userSign.textContent};
      return user;
  };

  setUserInfo( {name, sign} ) {
    this._userName.textContent = name;
    this._userSign.textContent = sign;
  }
};
