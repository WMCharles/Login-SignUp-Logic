import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './components/Landing';
// import NavBar from './components/NavBar';
import { useState } from 'react';
import { defaultUser } from './components/User';

function App() {
  
    const [user, setUser] = useState(defaultUser.name)
    const [password, setPassword] = useState(defaultUser.password)
    const [email, setEmail] = useState(defaultUser.email)

    const User = {user, email, password}

    function signUp(newuser, newemail, newpassword){
        setEmail(newemail)
        setPassword(newpassword)
        setUser(newuser)
    }

    // console.log(User)

  return (
    <Router>
      <div className='home'>
        {/* <NavBar/> */}
        <Routes>
          <Route path='/' element={<Landing signUp={signUp} User={User}/>}/>
          <Route path='home' element={<Home User={User}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
