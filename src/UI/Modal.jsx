/* eslint-disable react/prop-types */
import classes from './Modal.module.css';
import React,{ Fragment } from 'react';
import ReactDOM from "react-dom";

const BackDrop=(prop)=>{
  return (<div className={classes.backdrops} onClick={prop.onClose}/>);
};
const OverLay=(props)=>{
    return(<div className={classes.modaloverlay}>
        <div className={classes.content}>{props.children}</div>
    </div>);
};
const PortalElement=document.getElementById('overlays');
const Modal=(prop)=>{

    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={prop.onClose}/>,PortalElement)}
            {ReactDOM.createPortal(<OverLay>{prop.children}</OverLay>, PortalElement)}
        </Fragment>
    );
};
export default Modal;