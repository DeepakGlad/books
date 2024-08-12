import { useState  } from "react";


const BooksEdit = ({onEdit}) => {

    const [text,setText] = useState("");
    const onchangehandler = (e) => {
        setText(e.target.value);
        
    }
    const onSubmit= (e) => {
        e.preventDefault();
        onEdit(text);
    }

    return <div class='p-4 bg-white border border-gray-200 rounded-lg shadow-md'>
        <form onSubmit={onSubmit} class='flex flex-col space-y-4'>
        <input value={text} onChange={onchangehandler}  class='w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        <button type='submit'  class='w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>Submit</button>
        </form>
    </div>;


}

export default BooksEdit;