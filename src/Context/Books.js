
import { useState, useEffect } from 'react';
import axios from 'axios';

import { createContext } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {

    
const [books,createBooks] = useState([]);


useEffect(  ()=>{
 const racea = async () => {
   const res = await axios.get('http://localhost:3001/books');
   const data = await res.data;

  createBooks(data);

 }

racea();

 },[]);

 const addBooks = (event) => {

   axios.post('http://localhost:3001/books',{"name":event});

   //const added = [ ...books,{event}];
   createBooks([...books,{name:event,id: books.length+1}]);


   }

const ondelete = (booktoDelete) => {

 axios.delete(`http://localhost:3001/books/${booktoDelete}`,booktoDelete);

 const ondelete = books.filter((book) => book.id !== booktoDelete);
 createBooks(ondelete);
}

const onEdit = (bookToEdit, newBookDetails) => {

 const updatedBooks = books.map((book) => {
   if (book.id === bookToEdit) {
     return {id:book.id,name:newBookDetails};
   }
   return book;
 });

 axios.put(`http://localhost:3001/books/${bookToEdit}`,{"name":newBookDetails});

 createBooks(updatedBooks);
};


    return  <BooksContext.Provider  value={{
    books,
    onEdit,
    ondelete,
    addBooks
}}>
        { children }
    </BooksContext.Provider>;
}

export {Provider};
export default BooksContext;