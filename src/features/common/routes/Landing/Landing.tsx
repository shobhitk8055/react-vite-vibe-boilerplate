// LandingPage.js
import React from 'react';
import { Menu, MenuButton, MenuItem, MenuTitle } from '@/vibe/components';
import { Person } from '@/vibe/components/Icon/Icons';
import { useNavigate } from 'react-router-dom';
import "./landing.css";
import background from '@/assets/back.jpg';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <h1>My Landing Page</h1>
      <MenuButton component={Person} size="small" dialogClassName="my-menu">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Select one option" captionPosition={MenuTitle.positions.top} />
          <MenuItem onClick={() => navigate('/auth/login')} title="Login" />
          <MenuItem onClick={() => navigate('/auth/register')} title="Register" />
        </Menu>
      </MenuButton>
    </nav>
  );
}

function HeroSection({ backgroundImage }: { backgroundImage: string }) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-overlay"></div> {/* Overlay for readability */}
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website!</h1>
        <p className="hero-subtitle">Discover our services and offerings.</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
}

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection backgroundImage={background} />
    </div>
  );
}