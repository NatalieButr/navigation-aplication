import React from 'react'
import EnterBtn from "../components/EnterBtn";

import '../App.css'
import LogoComponent from "../components/LogoComponent/LogoComponent";

class HomePage extends  React.Component {

    render() {
        return (
            <div className='homepage-content'>
                <LogoComponent/>
                <EnterBtn />
            </div>
        )
    }

}
export default HomePage