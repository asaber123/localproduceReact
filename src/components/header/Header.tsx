import {useState} from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
// This is the header component

export const Header = () => {
    // Here I set a state to handle the responsive nav-bar menu
    const [menuOpen, setMenuOpen] = useState(true);
    const menuTogglehandler = () =>{
        setMenuOpen((p) =>!p);

    }
    return (
        <header className="header">
            <div className="content">
                <h2 className="logo">LocalProduce</h2>
                {/* This has a classname of nav, but it checks if the menu is open, then it changes name to isMenu */}
                <nav className={`nav ${menuOpen? "isMenu" :""}`}>
                    <ul>
                    <   li> <a href="#home">Home</a></li>  
                       <li> <a href="#search">Search produce</a></li>
                       <li> <a href="#about">About</a></li>
                    </ul>
                </nav>
                {/* This div only shows on small screens, id the icon is clicked then the functon menuTogglehandler is activated and meny opens.  */}
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

