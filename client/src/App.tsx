import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Login } from "./views/Login/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
