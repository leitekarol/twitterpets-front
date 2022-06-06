import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";


function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<RequireAuth> <Home/></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
      

      </Routes>
    </AuthProvider>
  );
}

export default App;
