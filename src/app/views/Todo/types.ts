/* --- STATE --- */
export interface IToDoState {
    loading: boolean;
    data: ITodo[];
  }
  
  export interface ITodo {
    id: number | string;
    todo: string;
  }
  
  export type ContainerState = IToDoState;
  