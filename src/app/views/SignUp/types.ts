/* --- STATE --- */
export interface IUserState {
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string | null,
    user: IUser;
  }
  
  export interface IUser {
    username: string;
    email: string;
  }

  export interface IUserSignUp {
      username: string;
      email: string;
      password: string;
  }
  
  export type ContainerState = IUserState;
  