import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personal from "./Pages/Personal";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<Personal />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
