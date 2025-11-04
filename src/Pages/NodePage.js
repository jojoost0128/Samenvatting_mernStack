import React from "react";
import { Routes, Route } from "react-router-dom"

import NodeBasic from "./NodePageComponents/NodeBasic";
import LinkLijst from "../Shared/LinkLijst";

const NodePage = props => {
    const LinkObjectLijstje = [
        { path: 'NodeBasic', name: 'Node basis' },
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
            </Routes>
        </div>
    )
}

export default NodePage