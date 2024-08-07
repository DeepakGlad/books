import { useState  } from "react";

import BooksEdit from "./BooksEdit";

const Books = ({book, onDelete, onEdit, id}) => {

    const [edit, showedit] = useState(false);

    const handleDelete = () => {
        onDelete(id);
      };

      const handleEdit = () => {
        showedit(!edit);
      }

      const handleeditbooks= (text) => {
        onEdit(id,text);

        showedit(!edit);
    }

      const editview = edit ?  <BooksEdit onEdit={handleeditbooks} /> :  <button onClick={handleEdit} class='text-red-500 hover:text-grey-700 focus:outline-none border'>Edit</button>;

    return <div>
        
       <p> {book} </p>
       <button onClick={handleDelete} class='text-red-500 hover:text-red-700 focus:outline-none border'>Delete</button>

       {editview}
        </div>;
}

export default Books;