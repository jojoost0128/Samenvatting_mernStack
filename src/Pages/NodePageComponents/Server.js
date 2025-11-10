import React from "react";

const Server = props => {
    const voorbeeld = `
        const http = require('http') (Dit heb je nodig om de functies te importeren om een server te maken)

        const server = http.createServer((req, res) => { (createServer is de functie dat een server maakt het vereist een (req, res) props)
            console.log('Binnenkomend request')
            console.log(req.method, req.url) (req staat voor request en het vraagt informatie op van de server)

            if (req.method === 'POST') { (in dit geval wordt req gebruikt om te zien of er een POST methode gemaakt is voordat de server iets doet)
                let body = ''
                req.on('end', () => {
                    const gebruikersnaam = body.split('=')[1]
                    res.end('<h1>' + gebruikersnaam + '</h1>')
                })

                req.on('data', (chunk) => { (req.on is voor de server om data op te halen in dit geval is dat data LET OP data kan niet altijd in een keer opgehaald worden en soms moet dat in chunks gebeuren)
                    body += chunk
                })

            } else {
                res.setHeader('Content-Type', 'text/html') //text/plain  (res staat voor response en en dat is de informatie dat je dan terugstuurt)
                res.end('<form method="POST"><input type="text" name="gebruikersnaam"><button type="submit">Create User</button></form>') 
                
                (In res end wordt er een response terug gestuurd wat je ziet in je browser daarom de html.
                In de form html vind je de method POST. Dit zorgt ervoor dat de if statement true is en is een commando voor de server)
        })

        server.listen(5000) (listen is om er voor te zorgen dat je een lokaale server maakt op localhost de cijfer tussen de haken bepaalt welke port jij je server zet)
    `

    return (
        <div>
            <h2>Server maken</h2>
            <p>
                Om goed duidelijk te maken hoe je een server opstelt denk ik dat een voorbeeld code makkelijker te begrijpen is.<br />
                Voorbeeld:<br />
                <pre style={{ whiteSpace: 'pre' }}>
                    {voorbeeld}
                </pre>
            </p>
        </div>
    )
}

export default Server