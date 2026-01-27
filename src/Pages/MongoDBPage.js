import React from "react";
import { Routes, Route } from "react-router-dom"

import MongoDBOpzet from "./MongoDB/MongoDBOpzet";
import SimpeleConnectie from "./MongoDB/SimpeleConnectie";
import LinkLijst from "../Shared/LinkLijst";

const LinkObjectLijstje = [
    { path: 'MongoDBOpzet', name: 'Mongo database Opzetten' },
    { path: 'SimpeleConnectie', name: 'Simpele connectie Backend' }
]


const MongoDBPage = () => {
    return <div>
        <Routes>
            <Route path='/' element={
                <div>
                    <h2>Mongo database</h2>
                    <LinkLijst paths={LinkObjectLijstje} />
                </div>
            } />
            <Route path='MongoDBOpzet' element={<MongoDBOpzet />} />
            <Route path='SimpeleConnectie' element={<SimpeleConnectie />} />
        </Routes>

        <p>

        </p>
    </div>
}

export default MongoDBPage

/*
Username: joostlensvelt_db_user
Password: SyIyEetXgdxz9t7h

Products Password: QGDnBd7P0Vg7lUkb
*/