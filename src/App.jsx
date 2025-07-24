import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import SignInPage from './pages/SignIn';
import FeedPage from './pages/FeedPage';
import Navbar from './components/Navbar';
import { backendClient } from './clients/backendClient';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Social Media App</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
