import CatCard from "./components/CatCard";
import Header from "./components/Header";
import catsData from "./data/cats";

function App() {
  return (
    <>
      <Header text="Hello 🐱" />

      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}
    </>
  );
}

export default App;
