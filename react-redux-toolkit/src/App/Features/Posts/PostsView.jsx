import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            {isLoading && <h3>Loading.....</h3>}
            {error && <h3>{error}</h3>}
            {posts && posts.map((post) => {
                const { title, body } = post
                return <article key={post.id} className='border text-start px-3 py-2'>
                    <h5 >{title}</h5>
                    <p>{body}</p>
                </article>
            })}
        </div>
    );
};

export default PostsView;