import Dog from "./Dog";
import "./DogList.css";
import PropTypes from "prop-types";

const DogList = (props) => {
  const dogComponents = props.dogData.map((dog) => {
    return (
      <Dog
        name={props.name}
        favoriteToy={props.favoriteToy}
        chipNumber={props.chipNumber}
      />
    );
  });
  return <ul>{dogComponents}</ul>;
};

export default DogList;
