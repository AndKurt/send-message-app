export interface ISendPost {
  title: string;
  recepient: string;
  sender: string;
  message: string;
}
export interface IUserData extends ISendPost {
  id: string;
}

export interface IUser {
  id: string;
  name: string;
}
