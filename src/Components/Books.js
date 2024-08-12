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

      //const editview = edit ?  <BooksEdit onEdit={handleeditbooks} /> :  <button onClick={handleEdit} class='text-red-500 hover:text-grey-700 focus:outline-none border'>Edit</button>;

      const editview = edit ? (
        <BooksEdit onEdit={handleeditbooks} />
    ) : (
        <button
            onClick={handleEdit}
            class='text-blue-500 hover:text-blue-700 focus:outline-none border border-blue-500 rounded-lg py-1 px-2 text-sm'
        >
            Edit
        </button>
    );

    
    return <div class='flex items-center justify-between p-4 border-b border-gray-200'>
    <p class='text-lg'>{book}</p>
    <div class='flex items-center space-x-2'>
   {editview}
        <button
            onClick={handleDelete}
            class='text-red-500 hover:text-red-700 focus:outline-none border border-red-500 rounded-lg py-1 px-2 text-sm'
        >
            Delete
        </button>
    </div>
</div>

}

export default Books;