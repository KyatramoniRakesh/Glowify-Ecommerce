import React, { useState } from 'react';
import '../CSS/Signup.css';

const SidebarSignup = ({ isOpen, onClose, setIsLoggedIn, setUserName, openLogin }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^.{6,}$/;

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!regexEmail.test(email)) newErrors.email = 'Please enter a valid email.';
    if (!regexPassword.test(password)) newErrors.password = 'Password must be at least 6 characters.';
    if (password !== confirm) newErrors.confirm = 'Passwords do not match.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = () => validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      const exists = users.some(user => user.email === email);

      if (exists) {
        alert('User already exists. Please login.');
        // optionally navigate to login
        openLogin();
      } else {
        const newUser = { name, email, password, cart: [] };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('currentUser', JSON.stringify({ email, name }));

        setUserName(name);
        setIsLoggedIn(true);

        // smooth close animation
        const sidebar = document.querySelector('.sidebar-signup-container');
        sidebar.classList.remove('open');
        setTimeout(onClose, 300);
      }
    }
  };

  return (
    <div className={`sidebar-signup-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-signup-header">
        <h2>Create Account</h2>
        <button className="sidebar-signup-close" onClick={onClose}>×</button>
      </div>

      <form className="sidebar-signup-form" onSubmit={handleSubmit}>
        <label>Name *</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.name && <span className="sidebar-signup-error">{errors.name}</span>}

        <label>Email Address *</label>
        <input
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.email && <span className="sidebar-signup-error">{errors.email}</span>}

        <label>Password *</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.password && <span className="sidebar-signup-error">{errors.password}</span>}

        <label>Confirm Password *</label>
        <input
          type="password"
          placeholder="********"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          onBlur={handleBlur}
        />
        {errors.confirm && <span className="sidebar-signup-error">{errors.confirm}</span>}

        <button type="submit" className="sidebar-signup-btn">CREATE ACCOUNT</button>

        <p style={{ marginTop: '1rem' }}>
          Already have an account?{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              // close signup sidebar
              const sidebar = document.querySelector('.sidebar-signup-container');
              sidebar.classList.remove('open');
              setTimeout(() => {
                onClose(); // final close
                openLogin(); // open login sidebar
              }, 300);
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SidebarSignup;
