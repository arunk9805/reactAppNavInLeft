import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import SideBar from "./components/Sidebar";


function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </SideBar>
    </Router>

  );
}

export default App;
