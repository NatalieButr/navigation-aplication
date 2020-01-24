import React, {Component} from 'react';
import { withRouter } from 'react-router'

import './styles.scss';
import {ReactComponent as Entry} from "../../assets/images/icons/entry.svg";

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
                <Entry className='enter-icon'/>
                Вход
            </button>
        )
    }

}

export default withRouter(EnterBtn);