import React from "react";

const LinkLijst = props => {
    console.log(props.paths)
    return (
        <ul>
            {props.paths.map(theWay => {
                return (<li></li>)
            })}
        </ul>
    )
}

export default LinkLijst