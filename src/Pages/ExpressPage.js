import React from "react";
import { Routes, Route } from "react-router-dom"

import ExpressBasic from "./ExpressPageComponents/ExpressBasis";
import RoutersEnControlers from "./ExpressPageComponents/RoutersEnControlers";
import Middelware from "./ExpressPageComponents/Middelware"
import LinkLijst from "../Shared/LinkLijst";

const ExpressPage = props => {
    const LinkObjectLijstje = [
        { path: 'ExpressBasic', name: 'Basis van express' },
        { path: 'RoutersEnControlers', name: 'Routers en controlers' },
        { path: 'Middelware', name: 'Middelware' }
    ]

    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <div>
                        <h2>Express</h2>
                        <LinkLijst paths={LinkObjectLijstje} />
                    </div>
                } />
                <Route path='ExpressBasic' element={<ExpressBasic />} />
                <Route path='RoutersEnControlers' element={<RoutersEnControlers />} />
                <Route path='Middelware' element={<Middelware />} />
            </Routes>
        </div>
    )
}

export default ExpressPage