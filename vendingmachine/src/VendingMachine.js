import React from "react"
import { Link } from "react-router-dom"


function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine!</h1>
            <Link to="/Wendys">
                Wendy's
            </Link>
            <Link to="/Rockstar">
                Rockstar
            </Link>
            <Link to="/Mac">
                Mac N Cheese
            </Link>
        </div>
    )
}

export default VendingMachine;