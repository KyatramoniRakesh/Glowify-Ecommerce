import React, { useState } from 'react';
import '../CSS/Login.css';

const SidebarLogin = ({ isOpen, onClose, setIsLoggedIn, setUserName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^.{6,}$/;

    const newErrors = {};
    if (!regexEmail.test(email)) newErrors.email = 'Please enter a valid email.';
    if (!regexPassword.test(password)) newErrors.password = 'Password must be at least 6 characters.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = () => validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const matchedUser = users.find(user => user.email === email && user.password === password);

      if (matchedUser) {
        localStorage.setItem('currentUser', JSON.stringify({
          email: matchedUser.email,
          name: matchedUser.name
        }));

        setUserName(matchedUser.name);
        setIsLoggedIn(true);

        const sidebar = document.querySelector('.sidebar-login-container');
        sidebar.classList.remove('open');
        setTimeout(onClose, 300);

      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className={`sidebar-login-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-login-header">
        <h2>Sign In</h2>
        <button className="sidebar-login-close" onClick={onClose}>×</button>
      </div>

      <form className="sidebar-login-form" onSubmit={handleSubmit}>
        <label>Email Address *</label>
        <input
          type="email"
          placeholder="John.Smith@Example.Com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.email && <span className="sidebar-login-error">{errors.email}</span>}

        <label>Password *</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.password && <span className="sidebar-login-error">{errors.password}</span>}

        <button type="submit" className="sidebar-login-btn">LOGIN</button>

        <p style={{marginTop:'1rem'}}>
          Don't have an account?{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              onClose(); 
              document.querySelector('.sidebar-signup-container').classList.add('open');
            }}
          >
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default SidebarLogin;
