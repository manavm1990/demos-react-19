import PropTypes from "prop-types";

export default function Header(
  // Props are passed as an object. We can destructure it to get the text prop.
  { text }
) {
  return <h1 className="my-6 text-center text-3xl font-black">{text}</h1>;
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
