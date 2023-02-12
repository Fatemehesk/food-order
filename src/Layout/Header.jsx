import { Fragment } from "react";
import classes from './Header.module.css';
import mealsImage from '../assets/header.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1 >React Meals</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-img']}>
                <img src={mealsImage} className={classes.img}/>
            </div>
        </Fragment>
    );
}
export default Header;