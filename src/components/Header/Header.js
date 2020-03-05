import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import ExitBtn from "./ExitBtn";
import './styles.scss';
import LogoComponent from "../LogoComponent/LogoComponent";

class Header extends  Component {


    render() {
        return (
            <header>
                <div className='wrapper-for-logo'>
                   <Link to={'/articles'}>
                    <div className='cover-logo-icon' to={'/articles'}>
                        <LogoComponent/>
                    </div>
                        <h1>Navigation Application</h1>
                   </Link>
                </div>
                <ExitBtn />
            </header>
        )
    }

}

export default Header