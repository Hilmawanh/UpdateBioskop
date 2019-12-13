import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Logo from "../images/cinemaxxi.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";

export class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // console.log(this.props.AuthLog);

    return (
      <div>
        <Navbar expand="md" className="navbar">
          <NavLink
            href="/"
            style={{ fontWeight: "2000px", fontSize: 21, color: "#465881" }}
            className="navbar-brand"
          >
            {/* <img alt="Logo" src={Logo} /> */}
            Book Your Ticket &nbsp;
            <MdEventSeat style={{ fontSize: 23 }} />
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/now-playing" className="nav-link">
                  Now Playing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/upcoming-film" className="nav-link">
                  Upcoming Film
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart" className="nav-link">
                  <FaShoppingCart style={{ fontSize: 21 }} />
                  &nbsp;
                  Cart 
                </NavLink>
              </NavItem>
              {this.props.namauser === "" ? (
                <Link to="/login"   style={{ color: "white" }} className="nav-link btn btn-secondary">
                  Login
                </Link>
              ) : null}

              {this.props.namauser === "" ? null : (
                <Link to="" className="nav-link">
                  <FaUserAlt style={{ fontSize: 17 }} />
                  &nbsp;
                  {this.props.namauser}
                </Link>
              )}

              {this.props.namauser === "" ? null : (
                <Link
                  to="/logout"
                  style={{ color: "white" }}
                  className="nav-link btn btn-secondary"
                >
                  Logout
                </Link>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    AuthLog: state.Auth.login,
    namauser: state.Auth.username
  };
};

export default connect(MapStateToProps)(Header);
