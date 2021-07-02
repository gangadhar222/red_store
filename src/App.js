import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    </div>
  );
}

export default App;
