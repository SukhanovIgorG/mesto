export class UserInfo {
  constructor( {nameSelector, signSelector, avatarSelector} ) {
    this._userName = document.querySelector(nameSelector);
    this._userSign = document.querySelector(signSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const user = {name:this._userName.textContent, sign:this._userSign.textContent, avatar:this._userAvatar.link};
      return user;
  };

  setUserInfo( {name, sign} ) {
    this._userName.textContent = name;
    this._userSign.textContent = sign;
  };

  setUserAvatar( {avatar} ) {
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  };

  getUserAvatar() {
    const user = {avatar:this._userAvatar.style.backgroundImage};
      return user;
  };
  setUserId(id) {
    this._userId = id;
  }
  returnUserId() {
      return this._userId;
  }
  
}
