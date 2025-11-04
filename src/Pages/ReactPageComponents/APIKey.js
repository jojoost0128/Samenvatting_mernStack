import React from "react";

const APIKey = props => {
    /*
    const API_Key = ''
    fetch(`https://github.com/data?key=${API_Key}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    */

    return (
        <div>
            <h2>API key</h2>
            <p>
                Op github.com/settings/apps kan je een token maken om een tijdelijke API van je profiel te maken.<br />
                Je kan dat gebruiken om API te oefenen<br />
            </p>
        </div>
    )
}

export default APIKey