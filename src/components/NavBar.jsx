import PropTypes from "prop-types";

export default function NavBar({ links, handleClick }) {
  return (
    <nav className="my-8">
      <ul className="flex justify-around gap-x-8">
        {links.map((link) => {
          return (
            <li key={link}>
              <a href={`/${link.toLowerCase()}`} onClick={handleClick}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
