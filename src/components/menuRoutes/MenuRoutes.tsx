import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

import Main from "../main/Main";
import Communicate from "../communicate/Communicate";


import "./menuRoutes.sass"
import Deals from "../deals/Deals";

class MenuRoutes extends Component {
    render() {
        return (
            <div className="col-offset-1 col-11">
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/deals" element={<Deals/>}/>
                    <Route path="/communicate" element={<Communicate/>}/>
                </Routes>
            </div>
        );
    }
}

export default MenuRoutes