import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import SalesFunnel from "../salesFunnel/SalesFunnel";
import Communicate from "../communicate/Communicate";

import "./menuRoutes.sass"

class MenuRoutes extends Component {
    render() {
        return (
            <div className="content">
                <Routes>
                    <Route path="/handshake" element={<SalesFunnel/>}/>
                    <Route path="/communicate" element={<Communicate/>}/>
                </Routes>
            </div>
        );
    }
}

export default MenuRoutes