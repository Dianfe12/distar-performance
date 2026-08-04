
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'; 
import Login from './pages/login';
import Onboarding from './pages/onboarding';
import Workouts from './pages/workouts';
import Pricing from './pages/pricing';
import Dashboard from './pages/dashboard';
import AdminDashboard from './pages/admin';

import { Footer } from './components';
import AdminLogin from './pages/AdminLogin';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#121212' }}>
        
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}