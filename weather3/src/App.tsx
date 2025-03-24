import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Assistant from "./pages/Assistant/Assistant";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/:city" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
