import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoRoute from "./pages/NoRoute";
import LazyLoad from "react-lazy-load";


function App() {
  const { token } = useAuth();
  console.log(token)
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <LazyLoad><Login /></LazyLoad>}/>
        <Route path="/dashboard" element={token ? <LazyLoad><Dashboard /></LazyLoad> : <Navigate to="/" />} />
        <Route path="/404" element={<LazyLoad><NoRoute /></LazyLoad>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
