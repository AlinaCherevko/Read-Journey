export interface IState {
  user: IUser;
  token: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isAuthLoading: boolean;
  error: string | null | unknown;
}

export interface IInitialData {
  name: string;
  email: string;
}

export interface IRefreshRes {
  token: string;
  refreshToken: string;
}

export interface IUser extends IInitialData {
  _id: string;
}

export interface ISignUpData extends IInitialData {
  password: string;
}
export interface ISignUpRes extends IInitialData {
  token: string;
  refreshToken: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ICurrentUserRes extends ISignUpRes {
  _id: string;
}
