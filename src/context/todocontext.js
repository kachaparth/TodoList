import { createContext, useContext } from "react";

export const Todocontext = createContext({

    Todos: [
        {
            id: 1,
            TodoMsg: "java script",
            Completed: false,
        }
    ],

    addTodo: (Todo) => { },
    updateTodo: (id, TodoMsg) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }

})

export const Todoprovider = Todocontext.Provider;

export const useTodo = () => {
    return useContext(Todocontext);
} 