import CatCard from "./components/CatCard";
import Header from "./components/Header";
import catsData from "./data/cats";

function App() {
  return (
    <>
      <Header text="Hello 🐱" />
      <CatCard cat={catsData[0]} />
    </>
  );
}

export default App;
