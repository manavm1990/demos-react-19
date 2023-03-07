export default function GroceryLI({ grocery }) {
  return (
    <li key={grocery.id}>
      <label htmlFor={grocery.id}>{grocery.name}</label>

      <input
        type="checkbox"
        id={grocery.id}
        defaultChecked={grocery.purchased}
      />
    </li>
  );
}
