import "./App.css";
import { React } from "react";
import SMSButton from "./components/smsbutton";
import Navbar from "./components/NavBar/navbar";
import Homepage from './components/homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/about';
import Search from "./components/search";
import Post from "./components/postformpage";
import Postpage from './components/postspage';
import AboutPage from './components/about';


function App() {
  return (
    <div>


      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/discussions' element={<Postpage />}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Router>
 <SMSButton />

    </div>
  );
}

export default App;