import CatCard from "./components/CatCard";
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
          return (
            <li key={grocery.id}>
              <label htmlFor={grocery.id}>{grocery.name}</label>
              <input type="checkbox" id={grocery.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
