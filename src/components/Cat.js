import React from "react";
import PropTypes from "prop-types";

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

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired,
    petCount: PropTypes.number.isRequired,
};

export default Cat;
