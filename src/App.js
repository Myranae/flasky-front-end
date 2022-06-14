import "./App.css";
import Catlist from "./components/CatList";
import DogList from "./components/DogList";

function App() {
  return (
    <main>
      <h1>List of Cats</h1>
      <Catlist />
      <h1>List of Dogs</h1>
      <DogList />
    </main>
  );
}

export default App;
