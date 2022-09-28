
export const initialState = {
  numOfcakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === "BUY_CAKE") {
    return { numOfcakes: state.numOfcakes - 1 };
  }
  if (action.type === "RESET_CAKE") {
    return { numOfcakes: 10 };
  }
  if (action.type === "ZERO_CAKE") {
    return { numOfcakes: state.numOfcakes };
  }
  return state;
};
export default cakeReducer;
