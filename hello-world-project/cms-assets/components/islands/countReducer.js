export default function countReducer(state, action) {
  if (action.type === 'increment') {
    if (action.value == null) {
      throw new Error('Increment value missing');
    }
    state = {
      ...state,
      totalSteps: state.totalSteps + 1,
      count: state.count + action.value,
    };
  }

  return state;
}
