import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: uuidv4(), title, author }
        dispatch(addBook(book))
        navigate("/show-books",{replace:true})
    }
    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-between my-1'>
                    <label className='me-1' htmlFor="title">Title:</label>
                    <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className='d-flex justify-content-between my-1'>
                    <label className='me-1' htmlFor="author">Author:</label>
                    <input type="text" name="author" id="" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button className='btn btn-lg btn-primary col-md-12 text-center my-2' type="submit">Add Book</button>

            </form>
        </div>
    );
};

export default AddBook;