import React from 'react';

import NavMenu from '../commons/NavMenu';
import Footer from '../commons/Footer';

import SearchSection from './SearchSection';
import IconSection from './IconSection';
import DescriptionSection from './DescriptionSection';



class Home extends React.Component {

    componentDidMount = () => {
        // Redireccion a Dashboard business mientras no se tenga contenido de la parte statica
        this.props.history.push({ pathname: '/dashboard/business' });
    }
    

    render() {
        
        return (
            <div className="home">
                <NavMenu />
                <SearchSection />
                <div className="outer"></div>
                <IconSection />
                <DescriptionSection />
                <Footer />
            </div>
        );
    }
}

export default Home;