import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav-item-container'>
            <h1 className='site-name'>Aster Quiz</h1>
            <div>

                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Nav;