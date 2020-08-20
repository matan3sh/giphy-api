const initialState = {
  giphies: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_GIPHIES':
      return {
        ...state,
        giphies: action.payload,
      };
    default:
      return state;
  }
}
