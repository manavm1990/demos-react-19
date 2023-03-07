import CatCard from "./components/CatCard";
import Counter from "./components/Counter";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import userData from "./data/users";

function App() {
  return (
    <>
      <NavBar />

      <Header text="Hello 🐱" />

      <main className="space-y-8">
        {catsData.map((cat) => {
          return <CatCard cat={cat} key={cat.id} />;
        })}

        <ul>
          {groceriesData.map((grocery) => {
            return <GroceryLI grocery={grocery} key={grocery.id} />;
          })}
        </ul>

        {userData.map((user) => {
          return <UserCard user={user} key={user.email} />;
        })}

        <Counter />
      </main>
    </>
  );
}

export default App;
