import React, { PureComponent } from 'react';
// import Login from '../Login';
import LoginList from './LoginList';

class NavMenu extends PureComponent {
    render() {
        return (
            <div className="mainwrap">
                <div className="navwrap">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar" role="navigation">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" href="index.html">
                                            <img src="images/logo.png" alt="detourMaps" title="detourMaps" className="img-responsive" />
                                        </a>
                                    </div>

                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Community <span className="glyphicon glyphicon-menu-down ico" aria-hidden="true"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Chicago</a></li>
                                                    <li><a href="#">New York</a></li>
                                                    <li><a href="#">California</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services <span className="glyphicon glyphicon-menu-down ico" aria-hidden="true"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Deals</a></li>
                                                    <li><a href="#">Events</a></li>
                                                    <li><a href="#">Alerts</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories <span className="glyphicon glyphicon-menu-down ico" aria-hidden="true"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Services</a></li>
                                                    <li><a href="#">Health</a></li>
                                                    <li><a href="#">Food</a></li>
                                                    <li><a href="#">Beauty</a></li>
                                                    <li><a href="#">Auto</a></li>
                                                    <li><a href="#">Real State</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Resources <span className="glyphicon glyphicon-menu-down ico" aria-hidden="true"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">How It Works</a></li>
                                                    <li><a href="#">Faq</a></li>
                                                    <li><a href="#">Overview</a></li>
                                                    <li><a href="#">Store</a></li>
                                                </ul>
                                            </li>
                                            <LoginList />
                                            <li><a href="#"><div className="icoMap1"></div>Explore Map Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}



export default NavMenu;