const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: action.payload
      }
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.payload
      }
    case 'ADD_TO_QUEUE':
      return {
        ...state,
        queue: [...state.queue, action.payload]
      }
    default:
      return state;
  }
}

export default reducer;