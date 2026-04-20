import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../src/components/auth/signIn';
import CreateAccount from '../src/components/auth/createAccount';
import Dashboard from '../src/components/dashboard/dashboard';
import Staff from '../src/components/staff/staff';
import GuestHome from './components/home/guestHome';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/home' element={<GuestHome/>}/>
        <Route path="/staff" element={<Staff/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
