import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () =>{
        setMenuOpen((p) =>!p);

    }
    return (
        <header className="header">
            <div className="content">
                <h2 className="logo">LocalProduce</h2>

                <nav className={`nav ${menuOpen? "isMenu" :""}`}>
                    <ul>
                    <   li> <a href="#home">Home</a></li>  
                       <li> <a href="#search">Search produce</a></li>
                       <li> <a href="#about">About</a></li>
                    {/* <Link to='/search' >
                            <li>Seach produce</li>
                    </Link>
                    <Link to='/search' >
                            <li>Seach produce</li>
                    </Link> */}


                    </ul>
                </nav>
                <div className="toggle">
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

