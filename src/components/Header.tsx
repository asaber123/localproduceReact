import React from 'react';
import {useState} from 'react';
import classes from './Header.module.scss';

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () =>{
        setMenuOpen((p) =>!p);

    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>mySession</h2>

                <nav className={`${classes.header__content__nav} ${menuOpen? classes.isMenu:""}`}>
                    <ul>
                        <li>
                            <a href="/">Page one</a>
                        </li>
                        <li>
                            <a href="/">Page two</a>
                        </li>
                        <li>
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {menuOpen ? (
                    <BiMenu onClick={menuTogglehandler} />
                    ):( 
                     <AiOutlineClose onClick ={menuTogglehandler}/>
                     )}
                </div>
            </div>
        </header>
    );
};

export default Header