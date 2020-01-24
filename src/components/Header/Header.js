import React, {Component} from 'react';
import ExitBtn from "./ExitBtn";

import './styles.scss';
import LogoComponent from "../LogoComponent/LogoComponent";

class Header extends  Component {


    render() {
        return (
            <header>
                <div className='wrapper-for-logo'>
                    <LogoComponent/>
                    <h1>Navigation Test Application</h1>
                </div>
                <ExitBtn />
            </header>
        )
    }

}

export default Header