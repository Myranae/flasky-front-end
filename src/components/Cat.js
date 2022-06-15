import React from "react";

const Cat = (props) => {
    return (
        <li>
            <h3>Name of Cat: {props.name}</h3>
            <h4>Caretaker: {props.caretaker}</h4>
            <h4>Pet Count: {props.petCount}</h4>
            <button>Pet Cat</button>
        </li>
    );
};

export default Cat;
