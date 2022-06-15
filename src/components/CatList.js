import Cat from "./Cat";

const CatList = (props) => {
    const catComponents = props.catData.map((cat) => {
        return (
            <Cat
                name={cat.name}
                caretaker={cat.caretaker}
                petCount={cat.petCount}
            />
        );
    });

    return (
        <section>
            <h2>Cat Count: {props.catData.length}</h2>
            <ul>{catComponents}</ul>
        </section>
    );
};

export default CatList;
