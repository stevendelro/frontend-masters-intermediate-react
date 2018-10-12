export default function locationReducer(state = 'Portland, OR', action) {
  if (action.type === 'SET_LOCATION') {
    return action.payload;
  } else {
    return state;
  }
}
