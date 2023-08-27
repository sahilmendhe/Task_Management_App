import React, { useState, useEffect } from 'react';
import TasksList from './Tasks/tasksList';
import Navbar from './Tasks/navbar';
import LoginForm from './Auth/loginForm';
import './App.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'your-auth-token'); // Replace with your actual token
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar onSignOut={handleSignOut} />
          <TasksList />
        </>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
