import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLocationAllowed } from 'components/Utils.js';

class LoginList extends Component {
    render() {
        return (
            <li className="dropdown" style={{ borderRight: 'solid 1px #DBDBDB' }}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sig-In <span className="glyphicon glyphicon-menu-down ico" aria-hidden="true"></span></a>
                <ul className="dropdown-menu">
                    {!this.props.user && <li><a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">Login</a></li>}
                    {!this.props.user && <li><a href="#">Register</a></li>}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {isLocationAllowed('/admin', this.props.user) && <li><Link to="/admin">Admin</Link></li>}
                </ul>
            </li>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(LoginList);