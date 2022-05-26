export class UserInfo {
  constructor( {nameSelector, signSelector, avatarSelector} ) {
    this._userName = document.querySelector(nameSelector);
    this._userSign = document.querySelector(signSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  loadUserInfo( {name, sign, avatar} ) {
    this._userName.textContent = name;
    this._userSign.textContent = sign;
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  };

  getUserInfo() {
    const user = {name:this._userName.textContent, sign:this._userSign.textContent, avatar:this._userAvatar.link};
      return user;
  };

  setUserInfo( {name, sign} ) {
    this._userName.textContent = name;
    this._userSign.textContent = sign;
  };
    // https://i.pinimg.com/originals/62/8f/49/628f49798bba23a996bbb0fe8aad174e.jpg

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
  // returnUserInfo() {
  //   const user = {};
  //   user['name'] = this._userName.textContent;
  //   user['about'] = this._userSign.textContent;
  //   user['avatar'] = this._userAvatar.style.backgroundImage.url;
  //     return user
// }
  
}
