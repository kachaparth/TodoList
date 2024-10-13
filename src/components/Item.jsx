import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    
    const [NewMsg, setNewMsg] = useState(todo.TodoMsg)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const {updateTodo,deleteTodo ,toggleCompleted} = useTodo()
    

    const editTodo =()=>{
        updateTodo(todo.id ,{...todo , TodoMsg: NewMsg})
        setIsTodoEditable(false)
    }
   
    const toggle = () =>{
        // console.log(todo.Completed)
        toggleCompleted(todo.id)    
        // print()
    }
// function print()
// {
//     console.log(todo.TodoMsg,'Toggled',todo.Completed);    

// }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.Completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.Completed}
                onChange={toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.Completed ? "line-through" : ""}`}
                value={NewMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.Completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => (!prev));
                }}
                disabled={todo.Completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
