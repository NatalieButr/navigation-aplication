import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../../assets/selection.json");

class Icon extends React.Component {


    render() {

        const { name, color, size } = this.props;
        
        return (
         <IcoMoon iconSet={iconSet} icon={name} color={color} size={size} />
        )
    }
};

export default Icon;