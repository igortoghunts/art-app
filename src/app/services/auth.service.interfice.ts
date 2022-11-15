export interface IAuthService {
  user: IUser;
  isAuthenticated: boolean;
  getUser: () => IUser;
  login: (data: any) => void;
}

export interface IUser {
  isAuthenticated: boolean;
}
