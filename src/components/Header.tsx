import React from 'react';
import {useState} from 'react';

import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
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
                        <li>
                            <a href="/">Seach produce</a>
                        </li>
                        <li>
                            <a href="/">Page two</a>
                        </li>

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

export default Header