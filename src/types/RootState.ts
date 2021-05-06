import { IToDoState } from '../app/views/Todo/types';
import { IUserState } from '../app/views/SignUp/types';

export interface RootState { 
    todos?: IToDoState;
    user?: any; 
    counter?: any;
}