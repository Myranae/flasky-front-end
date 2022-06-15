import "./App.css";
import Catlist from "./components/CatList";

function App() {
    const catData = [
        {
            name: "Whiskers",
            caretaker: "Farah",
            petcount: 1357,
        },
        {
            name: "Fang",
            caretaker: "Luciana",
            petcount: 8267,
        },
        {
            name: "Beetle",
            caretaker: "Aya",
            petcount: 2468,
        },
    ];

    return (
        <main>
            <h1>List of Cats</h1>
            <Catlist catData={catData} />
        </main>
    );
}

export default App;
