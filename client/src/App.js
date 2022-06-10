import './App.css';
import { useState, useEffect } from "react";
import Login from './components/login';
import Students from './components/students';
import Weather from './components/weather';


function App() {

  const [user, setUser] = useState(undefined);

    const loadUser = () => {
        fetch("/api/me")
            .then((response) => {
                // debugger;
                if(response.status === 200){
                    return response.json()
                } else {
                    return undefined;
                }
            })
            .then(user => {
                setUser(user);
            })
    };

    // Use effect hook to render the students in the app. This will change any time that our initial state change
    useEffect(() => {
        loadUser();
    }, []);

  return (
    <div className="App">
      Hello from Techtonica!
      <Login user={user} />
      <Students />
      {user ? <Weather /> : <h3 className='LoginText'>Welcome, Please Log In</h3>}
      
    </div>
  );
}

export default App;
