import React from 'react';
import './styles/HeaderPhoto.css';

const HeaderPhoto = () => {
  return (
    <>
      <div className="image-container">
        <img src={logo} alt="gilgamesh sideways" />
      </div>
    </>
  );
}

export default HeaderPhoto;
