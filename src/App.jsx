import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ThreadDetailPage from "./pages/ThreadDetailPage";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const App = () => {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    console.log("🚀 ~ App ~ authUser:", authUser);
    console.log("🚀 ~ App ~ isPreload:", isPreload);
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <header style={{ maxWidth: "1200px", margin: "auto" }}>
        <Navbar authUser={authUser} signOut={onSignOut} />
      </header>
      <main style={{ maxWidth: "1200px", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/threads/:id" element={<ThreadDetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

