import React, { Component } from 'react';

export default class IconSection extends Component {
    render() {
        return (
            <div className="sectionwrap">
                <div className="navwrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-4 space">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <img src="images/icon-benefits.png" alt="" className="img-responsive" />
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12 icon-text">
                                    <h4>Benefits for</h4>
                                    <h5>Users</h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 space">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <img src="images/icon-bene-business.png" alt="" className="img-responsive" />
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12 icon-text">
                                    <h4>Benefits for</h4>
                                    <h5>Business</h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 space">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <img src="images/icon-learn.png" alt="" className="img-responsive" />
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12 icon-text">
                                    <h4>Learn</h4>
                                    <h5>How it works</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
