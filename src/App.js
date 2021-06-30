import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
