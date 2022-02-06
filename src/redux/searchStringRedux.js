// selectors
export const getSearchPhrase = state => state.searchString;

// actions
const createActionName = actionName => `app/searchString/${actionName}`;
const SEARCH= createActionName('SEARCH');

// action creators
export const search = payload => ({ type: SEARCH, payload });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;