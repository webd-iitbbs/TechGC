import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { BsFillAwardFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';

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
                        <NavbarBrand className="mr-auto " href="/">GEN</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
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
                                    <Button outline className="btn btn-google">Download Rulebook</Button>
                                </NavItem>
                                <NavItem>
                                    <Button outline className="btn btn-facebook" href="https://iitbbs-forms.herokuapp.com/">Register</Button>
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