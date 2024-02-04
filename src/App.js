import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/profile" element={ <Profile /> } />
        {/* No need for navigate here */}
        <Route path="/" element={ <Login /> } /> {/* Assuming you want to redirect to Login */}
      </Routes>
    </Router>
  );
}

export default App;