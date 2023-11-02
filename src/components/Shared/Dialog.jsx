import React from "react";
import { Children } from "react";
import Portal from "react-portal";
import FocusTrap from "focus-trap-react";

const Dialog = ({ title, content, setModal }) => {


  const onClose = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // <div className="dialog-content">{children}</div>

  return (
 
      <div className="dialog-overlay">
        <FocusTrap>
          <div className="dialog">
            <div className="dialog-header">
              <h2>{title}</h2>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>
          </div>
        </FocusTrap>
      </div>
   
  );
};

export default Dialog;
