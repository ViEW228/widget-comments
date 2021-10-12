export const addComment = (item) => {
  return {
    type: 'ADD_COMMENT',
    payload: item
  };
};

export const clickDelete = (id) => {
  return {
    type: 'CLICK_DELETE',
    payload: {
      id,
    }
  };
};

export const setValues = (values) => {
  return {
    type: 'SET_VALUES',
    payload: values
  };
};