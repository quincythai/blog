import React from 'react';
import '../styles/Parallax.css';

const Parallax = ({ title, image }) => {
    const parallaxStyle = {
      backgroundImage: `url(${image})`,
    };
  
    return (
      <div className='parallax' style={parallaxStyle}>
        <div className='parallax-text'>
          <h1>{title}</h1>
        </div>
      </div>
    );
  }

export default Parallax;