import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import Login from './components/Login';
import Dashboard from './src/components/Dashboard';
import './styles/App.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ererNsNonAzH0zQo_GS79XPOyCoMxr4",
      authDomain: "waterdtection.firebaseapp.com",
      databaseURL: "https://waterdtection-default-rtdb.firebaseio.com",
      projectId: "waterdtection",
      storageBucket: "waterdtection.firebasestorage.app",
      messagingSenderId: "690886375729",
      appId: "1:690886375729:web:172c3a47dda6585e4e1810",
      measurementId: "G-TXF33Y6XY0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('medvendUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    // Save user data to localStorage
    localStorage.setItem('medvendUser', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('medvendUser');
    setUser(null);
  };

  return (
    <div className="app">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;