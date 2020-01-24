import React, {Component} from 'react';


import './styles.scss';
import ModalPortal from "../../ModalPortal/ModalPortal";
import ExitModal from "../../ModalPortal/ExitModal/ExitModal";

class ExitBtn extends Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    };

    close = () => {
        this.setState({isOpen: false})
    };



    render() {

        const {isOpen} = this.state;

        return (
            <>
            <button className='exit-btn'
                    onClick={this.openModal}
            >
                Выйти
            </button>
            <ModalPortal>
                {isOpen  && <ExitModal close={this.close}/>}
            </ModalPortal>
            </>
        )
    }

}

export default ExitBtn;