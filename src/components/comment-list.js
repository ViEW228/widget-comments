import React from 'react';

const CommentsList = (props) => {
  const { comments, clickDelete } = props;
  const deleter = (id) => {
    let store = JSON.parse(localStorage.getItem("state"));
    if (!store) {
      store = comments;
    };
    const newStore = store.filter(el => {
      return el.id !== id.toString();
    });
    localStorage.setItem("state", JSON.stringify(newStore));
    clickDelete(id);
  };
 
  return (
    <div className="containerComment">
      {
        comments.map((comment, id) => {
          return (
            <div
              key={id}
              className="infoAllComment"
            >
              <div className="infoBlockComment">
                <p className="nameComment">
                  {comment.name}
                </p>
                <button
                  onClick={
                    el => {
                      deleter(comment.id);
                    }
                  }
                  className="buttonDelComment"
                >
                  x
                </button>
              </div>
              <p className="exactlyСomment">
                {comment.text}
              </p>
              <p className="timeComment">
                {comment.time}
              </p>
            </div>
          )
        })
      }
    </div>
  )
};

export default CommentsList;