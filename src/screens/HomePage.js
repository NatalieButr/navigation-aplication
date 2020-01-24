import React from 'react'
import {Redirect} from "react-router";

import EnterBtn from "../components/EnterBtn";
import '../App.css'
import LogoComponent from "../components/LogoComponent/LogoComponent";

class HomePage extends  React.Component {


    render() {

        if(window.localStorage.auth === 'true') {
            return <Redirect to="/articles" />;
        }

        return (
            <div className='homepage-content'>
                <LogoComponent/>
                <EnterBtn />
            </div>
        )
    }

}
export default HomePage