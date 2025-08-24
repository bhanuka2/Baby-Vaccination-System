import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/Common/Header';
import SignIn from './assets/components/login/SignIn';
import SignUp from './assets/components/login/SignUp';
import Welcome from './assets/components/Welcome';
import HomePage from './assets/components/HomePage';
import './styles/global.css';
//import ExpertsSlide from './assets/components/carousel/slides/ExpertsSlide';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
