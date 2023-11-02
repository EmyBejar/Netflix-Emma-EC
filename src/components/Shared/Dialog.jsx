import React, { useEffect, useRef } from 'react';
import { Portal } from 'react-portal'; 
import FocusTrap from "focus-trap-react";


const Dialog = ({ title, children, onClose }) => {

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  
 
  return (
    <Portal>
      <div className="dialog-overlay">
        <FocusTrap>
          <div className="dialog">
            <div className="dialog-header">
              <h2>{title}</h2>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
              <div className="dialog-body">{children}</div>
            </div>
          </div>
        </FocusTrap>
      </div>
      </Portal>
  );
};

export default Dialog;
