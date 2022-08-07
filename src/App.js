import React from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Footer />
    </main>
  );
}
export default App;
