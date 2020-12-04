import React,{ useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'><i class="fab fa-react"/>SANOJ</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink to='/' exact className='nav-links' activeClassName='nav-active' onClick={closeMobileMenue}>
                            <i class="fas fa-home fa-fw"/> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='nav-links' activeClassName='nav-active' onClick={closeMobileMenue}>
                            <i class="fas fa-address-card fa-fw"/> About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className='nav-links' activeClassName='nav-active' onClick={closeMobileMenue}>
                            <i class="fas fa-briefcase fa-fw"/> Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='nav-links' activeClassName='nav-active' onClick={closeMobileMenue}>
                            <i class="fas fa-address-book fa-fw"/>Contact
                        </NavLink>
                    </li>

                </ul>
            </nav>
            
        </>
    )
}

export default Navbar
