import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { BsFillAwardFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import logo from '../images/GClogo2.png';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md" className="shadow p-3 fixed-top navbar ">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto"><Link  to='/home'><img src={logo} className="logo" width="90" alt='General Championship' /></Link>
                        <a href="https://drive.google.com/file/d/1Ar8TpecMy5Baqsrig7rAWWEjQUxkgcV5/view?usp=sharing" target="_blank"className="hide btn btn-google">Rulebook</a>
                        <Button outline className="hide btn btn-facebook" href="http://register.gciitbbs.live/" target="_blank">Register</Button>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><IoHome className="fa-lg" /> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/events'><MdEventNote className="fa-lg" /> Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/team'><FaUsers className="fa-lg" /> Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/leader'><BsFillAwardFill className="fa-lg"/> LeaderBoard</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                <a href="https://drive.google.com/file/d/1Ar8TpecMy5Baqsrig7rAWWEjQUxkgcV5/view?usp=sharing" target="_blank" className="hiden btn btn-google">Rulebook</a>
                                </NavItem>
                                <NavItem>
                                    <Button outline className="hiden btn btn-facebook" href="http://register.gciitbbs.live/" target="_blank">Register</Button>
                                </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                {/* <div class="block"></div> */}
            </div>
        );
    }
}

export default Header;