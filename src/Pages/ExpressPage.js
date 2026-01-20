import React from "react";
import { Routes, Route } from "react-router-dom"

import ExpressBasic from "./ExpressPageComponents/ExpressBasis";
import RoutersEnControlers from "./ExpressPageComponents/RoutersEnControlers";
import Middelware from "./ExpressPageComponents/Middelware"
import ErrorHandeling from './ExpressPageComponents/ErrorHandeling'
import Postman from "./ExpressPageComponents/Postman";
import Overig from "./ExpressPageComponents/Overig";
import LinkLijst from "../Shared/LinkLijst";

const ExpressPage = props => {
    const LinkObjectLijstje = [
        { path: 'ExpressBasic', name: 'Basis van express' },
        { path: 'RoutersEnControlers', name: 'Routers en controlers' },
        { path: 'Middelware', name: 'Middelware' },
        { path: 'ErrorHandeling', name: 'Error handeling' },
        { path: 'Postman', name: 'Postman' },
        { path: 'Overig', name: 'Overig' }
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
                <Route path='ErrorHandeling' element={<ErrorHandeling />} />
                <Route path='Postman' element={<Postman />} />
                <Route path='Overig' element={<Overig />} />
            </Routes>
        </div>
    )
}

export default ExpressPage