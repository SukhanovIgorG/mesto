export class UserInfo {
  constructor( {nameSelector, signSelector} ) {
    this._userName = document.querySelector(nameSelector);
    this._userSign = document.querySelector(signSelector);
    this._nameArea = document.querySelector('.profile__name');
    this._signArea = document.querySelector('.profile__sign');
  }

  getUserInfo() {
    const user = {name:this._userName.textContent, sign:this._userSign.textContent};
      return user;
  };

  setUserInfo( {name, sign} ) {
    this._nameArea.textContent = name;
    this._signArea.textContent = sign;
  }
};
