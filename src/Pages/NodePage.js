import React from "react";
import { Routes, Route } from "react-router-dom"

import NodeBasic from "./NodePageComponents/NodeBasic";
import Server from "./NodePageComponents/Server";
import LinkLijst from "../Shared/LinkLijst";

const NodePage = props => {
    const LinkObjectLijstje = [
        { path: 'NodeBasic', name: 'Node basis' },
        { path: 'Server', name: 'Server maken' },
    ]

    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <div>
                        <h2>Node</h2>
                        <LinkLijst paths={LinkObjectLijstje} />
                    </div>
                } />
                <Route path='NodeBasic' element={<NodeBasic />} />
                <Route path='Server' element={<Server />} />
            </Routes>
        </div>
    )
}

export default NodePage