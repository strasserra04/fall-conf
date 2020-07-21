import React, { Component } from "react";
import StickyHeader from 'react-sticky-header';
import { Link } from "gatsby";
import 'react-sticky-header/styles.css';
import './Banner.scss';
 
class Header extends Component {
    render() {
        return (
        <StickyHeader>
            <div>
            <header>
                <div className="announcement">
                    <h1 className="announcement_content">ReactStickyHeader</h1>
                </div>
                <div className="toolbar-actions">
                    <div className="userlinks-container">
                        <Link to="/account">Go to your account</Link>
                    </div>
                </div>
            </header>
            </div>
        </StickyHeader>
        );
    }
}

export default Header;