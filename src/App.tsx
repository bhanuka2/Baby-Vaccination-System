import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import SignIn from './assets/components/login/SignIn';
import SignUp from './assets/components/login/SignUp';
import CustomerInterface1 from './assets/components/Home/CustomerInterface1';
import './styles/global.css';
import AdminDashboard from './assets/components/Admin/AdminDashboard';
import AD1 from './assets/components/Admin/AD1';
import AD2 from './assets/components/Admin/AD2';
import AD3 from './assets/components/Admin/AD3';

function App() {
  return (
    <>
    {/* // <Router>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/customer-interface" element={<CustomerInterface1 />} />
    //     </Routes>
    //   </div>
    // </Router> */}
    <AdminDashboard/>
    <AD3 />
    </>
  );
}

export default App;
