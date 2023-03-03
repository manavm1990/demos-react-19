export default function Header(
  // Props are passed as an object. We can destructure it to get the text prop.
  { text }
) {
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
}
