import PropTypes from "prop-types";

export default function GroceryLI({ grocery }) {
  return (
    <li key={grocery.id}>
      <input
        type="checkbox"
        id={grocery.id}
        defaultChecked={grocery.purchased}
      />
      <label htmlFor={grocery.id}>{grocery.name}</label>
    </li>
  );
}

GroceryLI.propTypes = {
  grocery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
  }).isRequired,
};
