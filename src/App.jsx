import React from "react";
import Counter from "./components/Counter";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import links from "./data/links";
import userData from "./data/users";
import Cats from "./routes/Cats";

function App() {
  const [currentPath, setCurrentPath] = React.useState("/");

  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentPath("/" + event.target.textContent.toLowerCase());
  };

  // TODO: Render the correct component based on the current path
  switch (currentPath) {
    case "/cats":
      return <Cats catsData={catsData} />;
  }

  // TODO: Move stuff to 'routes' folder
  return (
    <>
      <NavBar links={links} handleClick={handleNavClick} />
      <Header text="Hello 🐱" />

      <main className="container mx-auto space-y-8">
        <section>
          <h2>🛒</h2>
          <ul className="flex list-none justify-around">
            {groceriesData.map((grocery) => {
              return <GroceryLI grocery={grocery} key={grocery.id} />;
            })}
          </ul>
        </section>

        <section>
          <h2>👩‍💻</h2>
          <div className="cards-container grid-cols-5">
            {userData.map((user) => {
              return <UserCard user={user} key={user.email} />;
            })}
          </div>
        </section>

        <Counter />
      </main>
    </>
  );
}

export default App;
