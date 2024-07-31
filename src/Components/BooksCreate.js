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
    
    return <div>
        <form onSubmit={onSubmit}>
        <input onChange={handleChnage} value={book} ></input>
        <button type="submit">Add</button>
        </form>
    </div>;
}

export default BooksCreate;