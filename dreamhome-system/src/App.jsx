import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../src/components/auth/signIn';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
