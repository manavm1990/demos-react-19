import CatCard from "./components/CatCard";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";

function App() {
  return (
    <>
      <Header text="Hello 🐱" />

      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}

      <ul>
        {groceriesData.map((grocery) => {
          return <GroceryLI grocery={grocery} key={grocery.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
