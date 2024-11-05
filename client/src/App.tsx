import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./herlpers/user/authContext";
import { NavBar } from "./components/navbar/NavBar";
import { Login } from "./views/Login/Login";
import { Home } from "./views/Home/Home";
import { Register } from "./views/Register/Register";
import { Landing } from "./views/Landing/Landing";
import { AddMeal } from "./views/AddMeal/addMeal";
import { ProtectedRoute } from "./herlpers/user/protectedRoute";

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div>
        {location.pathname !== "/" && <NavBar />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-meal"
            element={
              <ProtectedRoute adminOnly>
                <AddMeal />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
