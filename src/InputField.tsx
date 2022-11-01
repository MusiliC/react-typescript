import React from 'react'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string >>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='container mx-auto  ' onSubmit={handleAdd}>
        <div className=' w-full flex space-x-4 justify-center p-2 relative'>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className='shadow text-xl appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full md:w-3/4' placeholder='Enter a task..' />
        <button className='w-1/4 bg-blue-500 text-xl hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0 ' type='submit'>Go</button>
        </div>

    </form>
  )
}

export default InputField