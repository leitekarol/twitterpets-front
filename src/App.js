import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
// import Feed from "./routes/Feed.js";
import Register from "./routes/Register";

function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={
             <RequireAuth> 
            {/* <Feed/> */}
            </RequireAuth>} 
           />
        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
