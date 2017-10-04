import React, { Component } from 'react';

export default class SearchSection extends Component {
    render() {
        return (
            <div className="imagewrap">
                <div className="navwrap">
                    <h1>Finding great deals around your neighborhood? <br /> Detour Maps is the source!</h1>
                    <div className="tab-nav">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><div className="tab-events"></div>Neighborhood</a></li>
                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><div className="tab-business"></div>Business</a></li>
                            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><div className="tab-deals"></div>Deals</a></li>
                            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><div className="tab-events"></div>Events</a></li>
                            <li role="presentation"><a href="#settings1" aria-controls="settings1" role="tab" data-toggle="tab" className="register"><div className="tab-register"></div>Register</a></li>
                        </ul>

                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade in active" id="home">
                                <form action="">
                                    <div className="tab-form-left">
                                        <div>Food, auto, beauty, health, services, real state</div>
                                        <input id="neighborhood" type="text" placeholder="Veige Food Restaurant" />
                                    </div>
                                    <div className="tab-form-right">
                                        <button type="button" className="btn btn-default btn-lg btn">
                                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="profile">
                                <form action="">
                                    <div className="tab-form-left">
                                        <div>Business</div>
                                        <input id="neighborhood" type="text" placeholder="Business" />
                                    </div>
                                    <div className="tab-form-right">
                                        <button type="button" className="btn btn-default btn-lg btn">
                                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="messages">
                                <form action="">
                                    <div className="tab-form-left">
                                        <div>Deals</div>
                                        <input id="neighborhood" type="text" placeholder="Deals" />
                                    </div>
                                    <div className="tab-form-right">
                                        <button type="button" className="btn btn-default btn-lg btn">
                                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="settings">
                                <form action="">
                                    <div className="tab-form-left">
                                        <div>Events</div>
                                        <input id="neighborhood" type="text" placeholder="Events" />
                                    </div>
                                    <div className="tab-form-right">
                                        <button type="button" className="btn btn-default btn-lg btn">
                                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="settings1">esse animi magni sint deserunt vero?</div>
                        </div>
                    </div>
                    <div className="cont-frase">
                        <div className="ico-big-map"></div>
                        <div className="frase">Try our book now feature</div>
                    </div>
                </div>
            </div>
        );
    }
}
