import Books from './Books';
import useBooksContext from "../Hooks/use-books-context";
  const BooksView = () => {

    const { books, ondelete, onEdit } = useBooksContext();

    const booksList = books.map((book, index) => (
      <Books key={index} id={book.id} book={book.name} onDelete={ondelete} onEdit={onEdit}/>
    ));

    return <div>{booksList} </div>;
  };
  
  export default BooksView;
  