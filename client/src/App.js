import './App.css';
import { React } from "react";
import Navbar from './components/NavBar/navbar';
import Homepage from './components/homepage';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Homepage />}/>
        </Routes>
      </Router>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
