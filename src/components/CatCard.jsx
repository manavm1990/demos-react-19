const getRandomWidth = () => {
  const number = Math.random() * (300 - 200) + 200;
  return number.toString().split(".")[0];
};

export default function CatCard({ cat }) {
  return (
    <figure>
      <img src={`https://placekitten.com/${getRandomWidth()}/300`} alt="" />
      <figcaption>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </figcaption>
    </figure>
  );
}
