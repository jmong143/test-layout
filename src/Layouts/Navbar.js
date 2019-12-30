import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles.css'
  
export default class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick(){
        // this.state.isOpen ? this.setState({isOpen: true}) : this.setState({isOpen: false})
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div>
            <Navbar className = "navbar-color" light expand="md">
              <NavbarBrand href="/">Hi Anjanette!</NavbarBrand>
              <NavbarToggler onClick={this.toggleClick} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to = "/" className = "nav-link"> <FontAwesomeIcon icon = {faHome}/> Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to = "/gallery" className = "nav-link"><FontAwesomeIcon icon = {faImage}/> Gallery</Link>
                  </NavItem>
                  <NavItem>
                    <Link to = "/message" className = "nav-link"><FontAwesomeIcon icon = {faEnvelope}/> Message</Link>
                  </NavItem>
                  {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
                
              </Collapse>
            </Navbar>
          </div>
        )
    }
}
