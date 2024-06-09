import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Semi Hyphen</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
