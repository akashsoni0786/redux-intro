import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../cakeAction";

const CakeContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes- {props.numOfcakes}</h2>
      <button onClick={props.buycake}>Buy Cake</button>
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
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(CakeContainer);
