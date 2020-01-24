import React, {Component} from 'react';
import { withRouter } from 'react-router'

import './styles.scss';

class ExitBtn extends Component {


    Exit = () => {
        console.log('выход')

        this.props.history.push('/')

    }

    render() {
        return (
            <button className='exit-btn'
                    onClick={this.Exit}
            >
                Выйти
            </button>
        )
    }

}

export default withRouter(ExitBtn);