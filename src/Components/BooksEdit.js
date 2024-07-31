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
        <input value={text} onChange={onchangehandler}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
}

export default BooksEdit;