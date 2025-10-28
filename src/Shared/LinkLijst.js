import React from "react";
import { NavLink } from "react-router-dom";

const LinkLijst = props => {

    return (
        <ul>
            {props.paths.map(theWay => {
                return (<li><NavLink to={theWay.path} end>{theWay.name}</NavLink></li>)
            })}
        </ul>
    )
}

export default LinkLijst