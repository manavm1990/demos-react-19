export default function UserCard({ user }) {
  return (
    <figure>
      <img src={user.picture?.thumbnail} alt="" />
      <figcaption>
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </figcaption>
    </figure>
  );
}
