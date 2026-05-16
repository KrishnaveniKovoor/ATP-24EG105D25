import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-black text-white p-4 flex justify-end gap-6 text-lg">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/technologies">Technologies</NavLink>
    </nav>
  );
}
export default Header