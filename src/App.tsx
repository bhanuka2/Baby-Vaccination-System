import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import SignIn from './assets/components/login/SignIn';
import SignUp from './assets/components/login/SignUp';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
