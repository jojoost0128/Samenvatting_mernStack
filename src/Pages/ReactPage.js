import React from "react";
import { Routes, Route } from 'react-router-dom'


import OpstartReactApp from './ReactPageComponents/Opstart-react-app';
import InfoTussenComponenten from './ReactPageComponents/informatie-sturen-tussen-componenten'
import Events from './ReactPageComponents/Events';
import State from './ReactPageComponents/State';
import ReactRouter from "./ReactPageComponents/ReactRouter";
import LinkLijst from "../Shared/LinkLijst";

const ReactPage = props => {
    const LinkObjectLijstje = [
        { path: 'OpstartReactApp', name: 'Opstarten react app' },
        { path: 'InfoTussenComponenten', name: 'Informatie sturen tussen componenten' },
        { path: 'Events', name: 'Events' },
        { path: 'State', name: 'State' },
        { path: 'ReactRouter', name: 'Opstarten react app' },
    ]
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <div>
                        <h2>Reactpage</h2>
                        <nav>
                            <LinkLijst paths={LinkObjectLijstje} />
                        </nav>
                    </div>
                } />
                <Route path="OpstartReactApp" element={<OpstartReactApp />} />
                <Route path="InfoTussenComponenten" element={<InfoTussenComponenten voorbeeld='Informatie sturen tussen componenten' />} />
                <Route path="Events" element={<Events />} />
                <Route path="State" element={<State />} />
                <Route path="ReactRouter" element={<ReactRouter />} />
            </Routes>
        </div>
    )
}

export default ReactPage