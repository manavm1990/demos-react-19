export default function NavBar() {
  return (
    <nav className="my-8">
      <ul className="flex justify-around gap-x-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cats">Cats</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/groceries">Groceries</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
      </ul>
    </nav>
  );
}
