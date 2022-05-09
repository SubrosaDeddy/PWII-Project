import { InsertChat } from "../services/ChatService";

export default class Chat {
  constructor(inputObj) {
    this._usersend = inputObj._usersend;
    this._userreceive = inputObj._userreceive;
    this.content = inputObj.content;
    this.time = inputObj.time;
  }

  sendMessageDB() {
    const res = InsertChat(this);
    return res;
  }

  getUserSend(){
    return this._usersend;
  }

  setUserSend(inputUserSend){
      this._usersend = inputUserSend;
  }

  getUserReceive(){
      return this._userreceive;
  }

  setUserReceive(inputUserR){
      this._userreceive = inputUserR
  }

  getContent(){
      return this.content;
  }

  setContent(inputContent){
      this.content = inputContent
  }

  getTime(){
      return this.time 
  }

  setTime(inputTime){
      this.time = inputTime
  }
  
}
