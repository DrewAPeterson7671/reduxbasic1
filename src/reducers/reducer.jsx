

const initialState = {
  age: 21
}

// reducer can set state = initialState but does not have to, can be just state
// action.type critical

const reducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'AGE_UP')
    newState.age++;
  if (action.type === 'AGE_DOWN')
    newState.age--;
  return newState;
}

export default reducer;
