import './App.css';
import { React } from "react"

import Search from './components/search';
import Post from './components/postformpage';
import Postpage from './components/postspage';


function App() {

  return (
    <div>
      <Search/>
      <Post/>
      <Postpage/>
    </div>
  );
}

export default App;
