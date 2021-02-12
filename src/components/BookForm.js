import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookForm(){

  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  

  return(
    <form  onSubmit={handleSubmit}>
      <input  value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="book title"
              required
              />
      <input  value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="book author"
              required
              />
      <button type="submit"> add book </button>
    </form>
  )
}
export default BookForm;