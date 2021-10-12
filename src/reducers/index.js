const comments = (state = [], action) => {
  switch (action.type) {

    case 'SET_VALUES':
      return action.payload;

    case 'ADD_COMMENT':
      const newState = [...state];
      newState.push(action.payload);

      return newState;
    
    case 'CLICK_DELETE':
      const filterState = state.filter(el => el.id !== action.payload.id);
      return filterState;
 
    
    default: 
      return state;
  };
};

export default comments;


