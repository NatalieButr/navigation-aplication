import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../../assets/selection.json");

class Icon extends React.Component {


    render() {
        return (
         <IcoMoon iconSet={iconSet} icon={this.props.name} color={this.props.color} size={this.props.size} />
        )
    }
};

export default Icon;