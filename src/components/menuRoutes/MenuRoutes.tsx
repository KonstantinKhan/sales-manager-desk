import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

import Main from "../main/Main";
import SalesFunnel from "../salesFunnel/SalesFunnel";
import Communicate from "../communicate/Communicate";


import "./menuRoutes.sass"

class MenuRoutes extends Component {
    render() {
        return (
            <div className="col-offset-1 col-11">
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/handshake" element={<SalesFunnel/>}/>
                    <Route path="/communicate" element={<Communicate/>}/>
                </Routes>
            </div>
        );
    }
}

export default MenuRoutes