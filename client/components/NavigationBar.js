import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar nav-bar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">scratch</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-rigth">
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;