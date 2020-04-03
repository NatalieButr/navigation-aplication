import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../../assets/selection.json");

class Icon extends React.Component {

    const { name, color, size } = this.props;

    render() {
        return (
         <IcoMoon iconSet={iconSet} icon={name} color={color} size={size} />
        )
    }
};

export default Icon;