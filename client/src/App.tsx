import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Login } from "./views/Login/Login";
import { Home } from "./views/Home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
