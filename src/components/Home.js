import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getComments } from "../actions";
import Posts from "./Posts";

export default function Home() {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const [posts, setPosts] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState("");

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPosts(postsList);
  }, [postsList]);

  const handleSearch = (e) => {
    e.persist();
    setPosts(
      postsList.filter(
        (post) =>
          post.title.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
    );
  };

  const loadComments = (id) => {
    if(id === selectedCommentId) {
      setSelectedCommentId("");
    } else {
      setSelectedCommentId(id);
      dispatch(getComments(id));
    }
  }

  return (
    <div>
      <Posts
        posts={posts}
        handleSearch={handleSearch}
        loadComments={loadComments}
        comments={comments}
        selectedCommentId={selectedCommentId}
      />
    </div>
  );
}
