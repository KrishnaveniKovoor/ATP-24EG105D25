import { Routes, Route } from "react-router-dom";
import RootLayer from './components/RootLayer'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Node from './components/Node'
import Vite from './components/Vite'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayer />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="technologies" element={<Technologies />}>
          <Route index element={<Java />} />
          <Route path="node" element={<Node />} />
          <Route path="vite" element={<Vite />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App