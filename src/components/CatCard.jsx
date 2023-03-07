import PropTypes from "prop-types";

const getRandomWidth = () => {
  const number = Math.random() * (300 - 200) + 200;
  return number.toString().split(".")[0];
};

export default function CatCard({ cat }) {
  return (
    <figure>
      <img src={`https://placekitten.com/${getRandomWidth()}/300`} alt="" />
      <figcaption>
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
      </figcaption>
    </figure>
  );
}

CatCard.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
