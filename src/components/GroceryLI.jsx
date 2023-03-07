import PropTypes from "prop-types";

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

GroceryLI.propTypes = {
  grocery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
  }).isRequired,
};
