import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Login } from "./views/Login/Login";
import { Home } from "./views/Home/Home";
import { Register } from "./views/Register/Register";
import { Landing } from "./views/Landing/Landing";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
