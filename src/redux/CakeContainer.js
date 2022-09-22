import React from "react";
import { connect } from "react-redux";
import { buyCake, resetck, stockzero } from "../cakeAction";
import { initialState } from "./cakeReducer";

const CakeContainer = (props) => {
  console.log(props);
  if(props.numOfcakes === 0){
    props.stockover();
  }
  return (
    <div>
      <p><b>1.</b> Create a redux react app and initialise a initial state for numberOfCakes = 10</p>
      <h2>Initial number of cakes: {initialState.numOfcakes}</h2>
      <hr />
      <p><b>2.</b> Create a reducer that update the initial state numberOfCakes on every BUY_CAKE action.
    <br />
    <b>3.</b> Make sure user can't buy cake from store if numberOfCake = 0
    <br />
    <b>4.</b>
    Create a action as BUY_CAKE to buy a cake from store.
    <br />
    <b>5.</b>On buy cake button click, print the updated value of numberOfCakes
      </p>
      <h2>Updating number of cakes : {props.numOfcakes}</h2>
      {props.numOfcakes === 0 ? (
        <>
          <h2 style={{color:"red"}}>Can't buy stock is over!</h2>
        </>
      ) : (
        <><button onClick={props.buycake}>Buy Cake</button></>
      )}
      <hr />
      <p><b>6.</b>Print the initial state of cake store (always)</p>
      <button onClick={props.resetcake}>Reset</button>
    </div>
  );
};

const mapStatetoprops = (state) => {
  return {
    numOfcakes: state.numOfcakes,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    buycake: () => dispatch(buyCake()),
    stockover: () => dispatch(stockzero()),
    resetcake: () => dispatch(resetck()),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(CakeContainer);
