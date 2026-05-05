function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.image} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button>Profile</button>
    </div>
  );
}

export default UserCard;