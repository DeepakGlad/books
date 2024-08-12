import { useState } from 'react';
import useBooksContext from "../Hooks/use-books-context";

const BooksCreate = () => {
const [book,setBook] = useState("");
const { addBooks} = useBooksContext();

    const handleChnage = (event) =>{
        const value = event.target.value;
        setBook(value);
    }

    const onSubmit=(event)=>{
        event.preventDefault(); 
        addBooks(book);
        setBook("");
    }
    
    return <div class='container mx-auto p-4 max-w-md'>
    <form onSubmit={onSubmit} class='flex flex-col space-y-4'>
        <input
            onChange={handleChnage}
            value={book}
            class='w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Add a new task'
        />
        <button
            type="submit"
            class='w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
        >
            Add
        </button>
    </form>
</div>

}

export default BooksCreate;