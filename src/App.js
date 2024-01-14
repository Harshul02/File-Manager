import Signup from "./pages/AuthPages/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/AuthPages/Login";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
