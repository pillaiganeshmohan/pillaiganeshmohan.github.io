import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Loader from './components/Loader';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loader" element={<Loader/>} />

        </Routes>
    </div>
    </Router>

    
  );
}

export default App;
