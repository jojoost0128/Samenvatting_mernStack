import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom'


import OpstartReactApp from './React/Opstart-react-app';
import InfoTussenComponenten from './React/informatie-sturen-tussen-componenten'
import Events from './React/Events';
import State from './React/State';
import ReactRouter from "./React/ReactRouter";
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
            <LinkLijst paths={LinkObjectLijstje} />
            {/*<nav>
                <ul>
                    <li><NavLink to="OpstartReactApp" >Opstarten react app</NavLink></li>
                    <li><NavLink to="InfoTussenComponenten">Informatie sturen tussen componenten</NavLink></li>
                    <li><NavLink to="Events">Events</NavLink></li>
                    <li><NavLink to="State">State</NavLink></li>
                    <li><NavLink to="ReactRouter">React Routers</NavLink></li>
                </ul>
            </nav>*/}
            <Routes>
                <Route path="/" element={<h2>Reactpage</h2>} />
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