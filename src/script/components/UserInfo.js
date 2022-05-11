export class UserInfo {
  constructor( {userName, userSign} ) {
    this._userName = userName;
    this._userSign = userSign;
    this._nameSelector = document.querySelector('.profile__name');
    this._signSelector = document.querySelector('.profile__sign')
  }

  getUserInfo() {
    const user = {name:this._nameSelector.textContent, sign:this._signSelector.textContent};
      return user;
  };

  setUserInfo() {
    this._nameSelector.textContent = this._userName;
    this._signSelector.textContent = this._userSign;
  }
};
