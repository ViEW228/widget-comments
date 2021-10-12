import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/comment-list';
import FormComment from '../components/comment-form';
import { addComment, clickDelete, setValues } from '../actions';

let App = (props) => {
  const {
    comments, addComment, clickDelete, setValues
  } = props;

  useEffect(() => {
    const items = localStorage.getItem("state");
    if (!items) return;
    setValues(JSON.parse(items));
  }, []);

  return (
    <div>
      <FormComment addComment={addComment} comments={comments}/>
      <CommentsList comments={comments} clickDelete={clickDelete} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (item) => dispatch(addComment(item)),
    clickDelete: (id) => dispatch(clickDelete(id)),
    setValues: (values) => dispatch(setValues(values)),
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;