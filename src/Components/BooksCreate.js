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
        <form onSubmit={onSubmit}>
        <input onChange={handleChnage} value={book} class='w-full p-2 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'></input>
        <button type="submit" class='text-green-500 hover:text-green-700 focus:outline-none border'>Add</button>
        </form>
    </div>;
}

export default BooksCreate;