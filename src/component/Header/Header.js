import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                {/* <ul>
                    <li>
                        <CustomLink to="/home">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/orderreview">Order review</CustomLink>
                    </li> */}
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>

                <Link to="/grandpa">Grand pa</Link>


                {/* </ul> */}

            </nav>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Header;