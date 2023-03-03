import Header from "./components/Header";
import catsData from "./data/cats";
import CatCard from "./components/CatCard";

function App() {
  return <CatCard cat={catsData[0]} />;
}

export default App;
