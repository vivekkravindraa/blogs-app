import React from "react";
import { useHistory } from "react-router-dom";
import cawStudios from '../assets/images/caw-studios.jpeg';

import "../assets/styles/Posts.scss";

export default function Posts({ posts, handleSearch }) {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="postsHeader">
          <div><h2>Listing Posts - {posts && posts.length}</h2></div>
          <div><img src={cawStudios} alt="no_image" height={48} /></div>
      </div>
      <input type="text" placeholder="Search posts.." onChange={(e) => handleSearch(e)} />
      <div className="posts">
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index} className="post">
                <div>
                  <p>{post.id}</p>
                </div>
                <div>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                  <button
                    onClick={() => history.push(`/posts/${post.id}/comments`)}
                  >
                    View Comments
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
