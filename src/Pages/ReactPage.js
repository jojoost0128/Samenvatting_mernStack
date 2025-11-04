import React from "react";
import { Routes, Route } from 'react-router-dom'


import OpstartReactApp from './ReactPageComponents/Opstart-react-app';
import InfoTussenComponenten from './ReactPageComponents/informatie-sturen-tussen-componenten'
import Events from './ReactPageComponents/Events';
import State from './ReactPageComponents/State';
import ReactRouter from "./ReactPageComponents/ReactRouter";
import TernaryExpresions from "./ReactPageComponents/TernaryExpresions";
import UseEffectHook from "./ReactPageComponents/useEffectHook";
import LinkLijst from "../Shared/LinkLijst";
import Overig from "./ReactPageComponents/Overig";
import APIKey from "./ReactPageComponents/APIKey";

const ReactPage = props => {
    const LinkObjectLijstje = [
        { path: 'OpstartReactApp', name: 'Opstarten react app' },
        { path: 'InfoTussenComponenten', name: 'Informatie sturen tussen componenten' },
        { path: 'Events', name: 'Events' },
        { path: 'State', name: 'State' },
        { path: 'ReactRouter', name: 'React router opzetten' },
        { path: 'TernaryExpresions', name: 'Ternary expresions' },
        { path: 'UseEffectHook', name: 'useEffect uitleg' },
        { path: 'Overig', name: 'Overige extra informatie' },
        { path: 'APIKey', name: 'API key' }
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
                <Route path="TernaryExpresions" element={<TernaryExpresions />} />
                <Route path="UseEffectHook" element={<UseEffectHook />} />
                <Route path="Overig" element={<Overig />} />
                <Route path="APIKey" element={<APIKey />} />
            </Routes>
        </div>
    )
}

export default ReactPage