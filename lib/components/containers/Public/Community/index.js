import React from 'react';
import NavMenu from '../NavMenu';
import SearcBar from './Searchbar';

class Community extends React.Component {

    render() {
        return (
            <div className="community">
                <NavMenu />
                <SearcBar />
                <h1>Hola</h1>
            </div>
        );
    }
}

export default Community;