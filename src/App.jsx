import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Timeline from './components/TimeLine';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
