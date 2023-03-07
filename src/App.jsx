import CatCard from "./components/CatCard";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import UserCard from "./components/UserCard";
import userData from "./data/users";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";

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
