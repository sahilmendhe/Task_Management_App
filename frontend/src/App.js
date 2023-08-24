import React, { useState } from 'react';
import './App.css';
import TasksList from './Tasks/tasksList';
import LoginForm from './Auth/loginForm';
import Navbar from './Tasks/navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navbar onSignOut={handleSignOut} /> { }
          <TasksList />
        </>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
