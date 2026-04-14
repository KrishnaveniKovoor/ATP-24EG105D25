import { UserProvider } from "./context/UserContext";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <UserProvider>
      <h1>User Management</h1>
      <UserForm />
      <UserTable />
    </UserProvider>
  );
}

export default App;