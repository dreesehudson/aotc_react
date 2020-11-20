import React, { useState } from 'react';
// import Wordmark from 'aotc_react/src/img/IA3_Wordmark_Black.png'
//import  from './Components/'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return (
        <Router>
            <div>
                <header>
                    <Navbar color="danger" light expand="md">
                        {/* <NavbarBrand href="/"><img src="" alt='wordmark' /></NavbarBrand> */}
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Play</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            </div>

        </Router>
    );
}

export default Header;
