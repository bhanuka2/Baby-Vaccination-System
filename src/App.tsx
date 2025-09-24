import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import SignIn from './assets/components/login/SignIn';
import SignUp from './assets/components/login/SignUp';
import CustomerInterface1 from './assets/components/Home/CustomerInterface1';
import './styles/global.css';
import AdminDashboard from './assets/components/Admin/AdminDashboard';
import AD1 from './assets/components/Admin/AD1';
import AD2 from './assets/components/Admin/AD2';
import AD3 from './assets/components/Admin/AD3';
import PatientSearch  from './assets/components/Admin/PatientSearch';
import ParentDashboard from './assets/components/Parent/ParentDashboard';
import PD1 from './assets/components/Parent/PD1';
import PD2 from './assets/components/Parent/PD2';
import PD3 from './assets/components/Parent/PD3';
import PD5 from './assets/components/Parent/PD5';
import Header from './assets/components/Common/Header.tsx'; 
import HomeUI from './assets/components/Home/HomeUI.tsx';
import PACreate from './assets/components/login/PACreate';
import AACreate from './assets/components/login/AACreate.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pa-create" element={<PACreate />} />
          <Route path="/aa-create" element={<AACreate />} />
          
          {/* Redirect from root to signin */}
          <Route path="/" element={<Navigate to="/signin" />} />
          
          {/* Routes with Header */}
          <Route path="/home" element={<><HomeUI /></>} />
          <Route path="/customer-interface" element={<><Header /><CustomerInterface1 /></>} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<><Header /><AdminDashboard /></>}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<AD2 />} />
            <Route path="manage-records" element={<AD1 />} />
            <Route path="patients-search" element={<PatientSearch />} />
            <Route path="vaccination-programs" element={<AD3 />} />
          </Route>
          
          {/* Parent Routes */}
          <Route path="/parent" element={<><Header /><ParentDashboard /></>}>
            <Route index element={<Navigate to="/parent/dashboard" />} />
            <Route path="dashboard" element={<PD1 />} />
            <Route path="vaccination-records" element={<PD2 />} />
            <Route path="reminders" element={<PD3 />} />
            <Route path="profile" element={<PD5 />} />
          </Route>
          
          {/* Catch-all route - redirect to signin */}
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
