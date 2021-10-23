import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getComments } from "../actions";
import cawStudios from '../assets/images/caw-studios.jpeg';

import "../assets/styles/Comments.scss";

export default function Comments(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getComments(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {props && (
        <div className="commentsHeader">
          <div>
            <h2>
              Listing {comments.length} comments for Post "
              {props.match.params.id}"
            </h2>
          </div>
          <div>
            <img src={cawStudios} alt="no_image" height={48} onClick={() => history.push('/')} />
          </div>
        </div>
      )}
      <div className="comments">
        {comments &&
          comments.map((comment, index) => {
            return (
              <div className="comment" key={index}>
                <div>
                  <p>{comment.name}</p>
                </div>
                <div>
                  <p>{comment.body}</p>
                </div>
                <div>
                  <p>{comment.email}</p>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
