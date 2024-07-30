// src/pages/Home.jsx
import React from "react";
import ThreadList from "../components/ThreadList";

const Home = () => {
  return (
    <div>
      <h1>Forum Threads</h1>
      <ThreadList />
    </div>
  );
};

export default Home;
