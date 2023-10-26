import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/global.css'

const Transition = ({ children }) => {
  const location = useLocation();

  return (
    <CSSTransition
      in={true} // Adjust this condition based on your logic
      timeout={300}
      classNames="page-transition"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;