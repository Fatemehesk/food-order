/* eslint-disable react/prop-types */
import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

const BackDrop = (prop) => {
  return <div className={classes.backdrops} onClick={prop.onClose} />;
};
const OverLay = (props) => {
  return (
    <CSSTransition
      in={true} // Always true because the modal is always rendered
      timeout={300}
      classNames={{
        enter: classes.overlayEnter,
        enterActive: classes.overlayEnterActive,
        exit: classes.overlayExit,
        exitActive: classes.overlayExitActive,
      }}
      unmountOnExit
    >
        <div><div className={classes.modaloverlay}>
        <div className={classes.content}>{props.children}</div>
      </div></div>
      
    </CSSTransition>
  );
};
const PortalElement = document.getElementById("overlays");
const Modal = (prop) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={prop.onClose} />,
        PortalElement
      )}
      {ReactDOM.createPortal(<OverLay>{prop.children}</OverLay>, PortalElement)}
    </Fragment>
  );
};
export default Modal;
