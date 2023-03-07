import CatCard from "./components/CatCard";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import UserCard from "./components/UserCard";
import userData from "./data/users";

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

      {userData.map((user) => {
        return <UserCard user={user} key={user.id.value} />;
      })}
    </>
  );
}

export default App;
