import React, {Component} from 'react';
import IcoMoon from "react-icomoon";

import './styles.scss';
import ModalPortal from "../../ModalPortal/ModalPortal";
import ExitModal from "../../ModalPortal/ExitModal";

const iconSet = require("../../../constants/selection.json");

class ExitBtn extends Component {
    state = {
        isOpen: false,
    };

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
                <IcoMoon iconSet={iconSet}  icon="camera" size={20} color="red"/>
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