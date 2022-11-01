import React,{useState} from 'react';
import InputField from './InputField';
import { Todo } from './model';
import TodoList from './TodoList';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string >("")

  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault()

    setTodos([...todos, {id: Date.now(), todo: todo, isDone:false}])
    setTodo("")
  }

  console.log(todos);
  

  return (
    <div className="container mx-auto">
      <div>
      <h2 className='text-4xl font-bold text-center my-3 text-blue-600'>Task TS</h2>
      </div>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
    <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
