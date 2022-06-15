import "./Dog.css";
import PropTypes from "prop-types";

const Dog = (props) => {
    return (
        <li className="dog-list__li">
            <h3>{props.name}</h3>
            <h4>{props.favoriteToy}</h4>
            <h4>{props.chipNumber}</h4>
            <button>Pet Dog</button>
        </li>
    );
};

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    favoriteToy: PropTypes.string.isRequired,
    chipNumber: PropTypes.number.isRequired,
};

export default Dog;
