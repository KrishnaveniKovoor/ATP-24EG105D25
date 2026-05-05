import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div className="grid">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;