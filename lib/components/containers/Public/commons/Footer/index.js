import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="navwrap">
                    <div className="footer-division hidden-sm hidden-xs">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="#">Chicago</a></li>
                            <li><a href="#">New York</a></li>
                            <li><a href="#">California</a></li>
                        </ul>
                    </div>
                    <div className="footer-division hidden-sm hidden-xs">
                        <h3>Neighborhoods</h3>
                        <ul>
                            <li><a href="#">Berwyn</a></li>
                            <li><a href="#">Cicero</a></li>
                            <li><a href="#">Archer Heights</a></li>
                            <li><a href="#">Brighton Park</a></li>
                            <li><a href="#">Back of the Yards</a></li>
                        </ul>
                    </div>
                    <div className="footer-division hidden-sm hidden-xs">
                        <h3>Solutions</h3>
                        <ul>
                            <li><a href="#">Organizations</a></li>
                            <li><a href="#">Group of Business</a></li>
                            <li><a href="#">Community Maps</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Properties</a></li>
                        </ul>
                    </div>
                    <div className="footer-division hidden-sm hidden-xs">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Clients</a></li>
                            <li><a href="#">Our Publisher</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-division">
                        <h3>Follow Us</h3>
                    </div>

                    <div className="divider"></div>

                    <div className="end">
                        <div className="col-md-10 col-sm-12">
                            <p className="copyright">
                                <span>&copy; 2017 Copyright by <strong>Detourmaps</strong><wbr />. </span> &nbsp; All rights reserved.&nbsp; <a href="#"><wbr /><span>Terms and Conditions</span></a></p>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <div className="top"><p>Go Back</p></div>
                            <div className="scrollToTop transition"><span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span></div>
                        </div>
                    </div>

                </div>

            </footer>
        );
    }
}
