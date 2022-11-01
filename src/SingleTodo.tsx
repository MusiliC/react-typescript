import React, { useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    setTodos(todos.map((todo) => (
        todo.id === id? {...todo, todo:editTodo}: todo
    )))

    setEdit(false)
  }

  return (
    <form className="" onSubmit={(e) => handleEdit(e,todo.id)}>
      <div className="bg-yellow-200 p-4 m-2 sm:w-1/2 sm:mx-auto flex justify-between items-center rounded-md my-2">
        {edit ? (
          <input
            type="text"
            value={editTodo}
            onChange= {(e) => seteditTodo(e.target.value)}
            className="shadow appearance-none border mx-2 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full md:w-3/4"
            // placeholder="Enter a task.."
          />
        ) : (
          <div className="text-xl">
            {todo.isDone ? (
              <p className="line-through "> {todo.todo} </p>
            ) : (
              <p>{todo.todo}</p>
            )}
          </div>
        )}

        <div className="flex space-x-4 hover:cursor-pointer">
       
          <AiFillEdit     onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }} />
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
          <MdDone onClick={() => handleDone(todo.id)} />
        </div>
      </div>
    </form>
  );
};

export default SingleTodo;
