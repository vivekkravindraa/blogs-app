import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPost } from "../actions";
import cawStudios from "../assets/images/caw-studios.jpeg";

import "../assets/styles/Post.scss";

export default function Post(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getPost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {props && (
        <div className="postHeader">
          <div>
            <h2>Blog : "{post.title}"</h2>
          </div>
          <div>
            <img
              src={cawStudios}
              alt="no_image"
              height={48}
              onClick={() => history.push("/")}
            />
          </div>
        </div>
      )}
      <div className="singlePost">
        <div>
          <p>{post.id}</p>
        </div>
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
