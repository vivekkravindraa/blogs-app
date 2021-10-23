import React from "react";
import { useHistory } from "react-router-dom";
import cawStudios from "../assets/images/caw-studios.jpeg";

import "../assets/styles/Posts.scss";

export default function Posts({
  posts,
  handleSearch,
  selectedCommentId,
  loadComments,
  comments,
}) {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="postsHeader">
        <div>
          <h2>Listing Posts - {posts && posts.length}</h2>
        </div>
        <div>
          <img src={cawStudios} alt="no_image" height={48} />
        </div>
      </div>
      <input
        type="text"
        placeholder="Search posts.."
        onChange={(e) => handleSearch(e)}
      />
      <div className="posts">
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index} className="post">
                <div className="postId">
                  <p>{post.id}</p>
                </div>
                <div className="postBody">
                  <p onClick={() => history.push(`/posts/${post.id}`)}>
                    {post.title}
                  </p>
                  <p>{post.body}</p>
                  <button onClick={() => loadComments(post.id)}>
                    {post.id === selectedCommentId
                      ? "Hide Comments"
                      : "View Comments"}
                  </button>
                  {post.id === selectedCommentId && (
                    <div className="comments">
                      {comments &&
                        comments.map((comment, index) => {
                          return (
                            <div className="comment" key={index}>
                              <p className="commentName">{comment.name}</p>
                              <p className="commentBody">{comment.body}</p>
                              <p className="commentEmail">{comment.email}</p>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
