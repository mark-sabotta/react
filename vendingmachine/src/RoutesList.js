import React from "react";
import { Routes, Route } from "react-router-dom"
import Wendys from "./Wendys"
import Rockstar from "./Rockstar"
import Mac from "./Mac"
import VendingMachine from "./VendingMachine";

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/Wendys" element={<Wendys />} />
            <Route path="/Rockstar" element={<Rockstar />} />
            <Route path="/Mac" element={<Mac />} />
        </Routes>
    )
}

export default RoutesList