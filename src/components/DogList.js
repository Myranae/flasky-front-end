import Dog from "./Dog";
import "./DogList.css";

const DogList = () => {
    const dog_data = [
        {
          name: "Wishbone",
          favoriteToy: "Squeaker",
          chipNumber: "82373",
        },
        {
          name: "Appa",
          favoriteToy: "Ball",
          chipNumber: "29238",
        },
        {
          name: "Jimminy",
          favoriteToy: "Bone",
          chipNumber: "72902",
        },
       ];

    const dogCOmponent

    return (
        <ul>
            <Dog />
            <Dog />
            <Dog />
        </ul>
    );
};

export default DogList;
