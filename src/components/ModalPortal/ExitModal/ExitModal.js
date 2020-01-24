import React from 'react';
import { withRouter } from 'react-router'

import './styles.scss'


class ExitModal extends React.Component {

    Exit = () => {
        localStorage.removeItem('auth' );
        this.props.history.push('/')

    };


    render() {
        const {close} = this.props;
        return (
                <div className='form-to-exit'>
                    <h3>Вы уверены, что хотите Выйти?</h3>
                    <div className='form-buttons'>
                        <button onClick={this.Exit}>Да</button>
                        <button onClick={close}>Нет</button>
                    </div>
                </div>
        );
    }
}

export default withRouter(ExitModal);