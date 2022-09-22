
const initialState = {
  numOfcakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === "BUY_CAKE") {
    return { numOfcakes: state.numOfcakes - 1 };
  }
  return state;
};
export default cakeReducer;
