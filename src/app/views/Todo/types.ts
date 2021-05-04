/* --- STATE --- */
export interface IUserSignInState {
    loading: boolean;
    signIn: ISignInForm;
  }
  
  export interface ISignInForm {
    email: string;
    username: string;
  }
  
  export type ContainerState = IUserSignInState;
  