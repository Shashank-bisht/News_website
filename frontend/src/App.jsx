import './App.css';
import Home from './pages/Home';
import { AppContext } from './context/contextApi';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Weather from './pages/Weather';
import { About } from './pages/About';

function App() {
  return (
    <AppContext>
         <Router>
      <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/sign-up' element={<Signup />} />
            <Route exact path='/sign-in' element={<Login />} />
            <Route exact path='/weather' element={<Weather />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
