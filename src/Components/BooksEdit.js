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

    return <div>
        <form onSubmit={onSubmit}>
        <input value={text} onChange={onchangehandler} class='w-full p-2 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        <button type='submit' class='text-red-500 hover:text-grey-700 focus:outline-none border'>Submit</button>
        </form>
    </div>
}

export default BooksEdit;