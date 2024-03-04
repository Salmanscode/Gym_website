import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";
import Reasons from "./components/Reasons.jsx";
import Plans from "./components/Plans.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Join from "./components/Join.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Hero />
    <Programs />
    <Reasons />
    <Plans />
    <Testimonials />
    <Join />
    <Footer />
  </React.StrictMode>
);
