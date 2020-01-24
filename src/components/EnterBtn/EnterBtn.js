import React, {Component} from 'react';
import IcoMoon from "react-icomoon";
import { withRouter } from 'react-router'

import './styles.scss';


const iconSet = require("../../constants/selection.json");


class EnterBtn extends Component {

    onEnter = () => {

        localStorage.setItem('auth', 'true');
        this.props.history.push('/articles')


    };

    render() {
        return(
            <button className='enter-btn'
                    onClick={this.onEnter}
            >
                <IcoMoon iconSet={iconSet}  icon="camera" size={20} color="red"/>
                Вход
            </button>
        )
    }

}

export default withRouter(EnterBtn);