import { useEffect, useState } from 'react'
import { Todoprovider } from './context'
import TodoItem from './components/item'
import TodoForm from './components/Form'



function App() {
  const [Todos,setTodos] = useState([])

  const addTodo = (Todo)=>{
     setTodos( (prev)=> [{id: Date.now(), ...Todo },...prev] )
  }
  const updateTodo = (id,Todo) =>{
     setTodos((prev)=>{
      return prev.map((eachTodo)=>{ 
        if(eachTodo.id == id)
        {
           return Todo;
        }
        else{
          return eachTodo;
        }
      })
      })
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> {
      return prev.filter((eachTodo)=>{
        if(eachTodo.id !== id)
          return eachTodo;
      })
    })
  }

  const toggleCompleted = (id)=>{
    setTodos((prev)=>{
      return prev.map((eachTodo) =>{
        if(eachTodo.id === id)
        {
          eachTodo.Completed= !(eachTodo.Completed);
        }
        return eachTodo;

      })
    })
  }
  
  useEffect(()=>{
 
   const todos = JSON.parse(localStorage.getItem('todos'))
   
    if(todos)
    {
      setTodos(todos)
    }
    console.log(Todos)
  },[])
 
  useEffect(()=>{
    if(Todos.length!=0)
      {
        localStorage.setItem('todos', JSON.stringify(Todos))
      }
   
    // console.log(localStorage.getItem("Todos"))
  },[Todos])



  

  return (
   <Todoprovider value={{Todos, addTodo, updateTodo,deleteTodo, toggleCompleted}} >
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((eachTodo) => (
                          <div key={eachTodo.id} className='w-full'>
                            <TodoItem  todo={eachTodo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
   </ Todoprovider>
  )
}

export default App
