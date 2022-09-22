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
      <h2>Total number of cakes: {initialState.numOfcakes}</h2>
      <h2>Number of cakes : {props.numOfcakes}</h2>
      {props.numOfcakes === 0 ? (
        <>
          <h2 style={{color:"red"}}>Can't buy stock is over!</h2>
        </>
      ) : (
        <><button onClick={props.buycake}>Buy Cake</button></>
      )}
      
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
