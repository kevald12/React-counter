//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import proptypes
import PropTypes from 'prop-types';

//creating the component
const SimpleCounter = (props) =>{
    return (<div className="bigCounter">
        <div className="calendar">
        <i className="fas fa-clock"></i>
        </div>
        <div className="four">{props.n4 % 10 }</div>
        <div className="three">{props.n3 % 10}</div>
        <div className="two">{props.n2 % 10}</div>
        <div className="one">{props.n1 % 10}</div>
    </div>);
}

SimpleCounter.prototype = {
n1:PropTypes.number, 
n2:PropTypes.number,
n3:PropTypes.number,
n4:PropTypes.number,
};


let counter = 0;
setInterval(() => {
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four,three,two,one);

    counter++;



//render your react application
ReactDOM.render(<SimpleCounter n1 = {one} n2 = {two} n3 = {three} n4 = {four}/>, document.querySelector("#app"));
}, 100);