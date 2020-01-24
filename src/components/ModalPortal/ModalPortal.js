import React from 'react';
import ReactDOM from 'react-dom';



class ModalPortal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modalStyles: true,
        };
    }


    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.body
        );
    }
}

export default ModalPortal;