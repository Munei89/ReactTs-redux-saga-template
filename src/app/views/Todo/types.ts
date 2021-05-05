/* --- STATE --- */
export interface IToDoState {
    loading: boolean;
    todos: ITodo[];
  }
  
  export interface ITodo {
    id: number | string;
    todo: string;
  }
  
  export type ContainerState = IToDoState;
  