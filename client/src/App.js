import './App.css';
import { React } from "react";
import Navbar from './components/NavBar/navbar';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Search from "./components/search";
import Post from "./components/post";

function App() {
  return (
    <div>



      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </Router>
      <Search />
      <Post />
    </div>
  );
}

export default App;