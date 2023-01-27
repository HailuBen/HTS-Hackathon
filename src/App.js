import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import CalorieTracker from "./pages/CalorieTracker";
import Feeling from "./pages/Feeling";
import Symptoms from "./pages/Symptoms";

import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/calorie-tracker" element={<CalorieTracker />} />
          <Route path="/feeling" element={<Feeling />} />
          <Route path="/symptoms" element={<Symptoms />} />

          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
