import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <NavLink 
        to="/register" 
        className="text-blue-500 underline"
      >
        Go to Register
      </NavLink>
    </div>
  );
}

export default Home;