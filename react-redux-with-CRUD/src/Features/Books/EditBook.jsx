import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UpdateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation()
    console.log(location);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(UpdateBook({ id, title, author }))
        navigate("/show-books", { replace: true })


    }
    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-between my-1'>
                    <label className='me-1' htmlFor="title">Title:</label>
                    <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className='d-flex justify-content-between my-1'>
                    <label className='me-1' htmlFor="author">Author:</label>
                    <input type="text" name="author" id="" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <button className='btn btn-lg btn-primary col-md-12 text-center my-2' type="submit">Update Book</button>

            </form>
        </div>
    );
};

export default EditBook;