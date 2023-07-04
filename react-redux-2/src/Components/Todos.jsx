import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../Services/Actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading......</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {
                    todos && todos.map(todo => {
                        const {id,title}=todo
                        return <article className='border my-2 d-flex' key={todo.id}>
                            <h4 className='mx-3'>{id}. </h4>
                            <h4>{title}</h4>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Todos;