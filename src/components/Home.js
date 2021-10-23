import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions';
import Posts from './Posts';

export default function Home() {
    const dispatch = useDispatch();
    const postsList = useSelector(state => state.posts);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setPosts(postsList)
    }, [postsList])
    
      const handleSearch = (e) => {
        console.log(e.target.value);
        e.persist();
        setPosts(
          postsList.filter(
            (post) =>
              post.title
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0
          )
        );
      };

    return (
        <div>
            <Posts posts={posts} handleSearch={handleSearch} />
        </div>
    )
}
