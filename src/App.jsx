// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThreadDetailPage from "./pages/ThreadDetailPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { LoadingBar } from "react-redux-loading-bar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <LoadingBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/:id" element={<ThreadDetailPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

