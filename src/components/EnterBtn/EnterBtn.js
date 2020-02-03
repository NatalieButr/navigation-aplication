import React, {Component} from 'react';
import { withRouter } from 'react-router'

import './styles.scss';
import Icon from "../Icon/Icon";


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
                <Icon name={'enter'} size={13} color={'white'} />
                <p> Вход </p>
            </button>
        )
    }
}

export default withRouter(EnterBtn);