import {TaskType, TodoListType} from '../AppWithRedux'
import {v1} from "uuid";
import {TasksStateType} from "../components/todolist/TodoList";


/*let todoListId1 = v1()
let todoListId2 = v1()*/


export const initialState: TodoListType[] = [

]


export type InitialStateTaskType = {
    [key: string]: TaskType[];
};

export const initialStateTask: InitialStateTaskType = {}