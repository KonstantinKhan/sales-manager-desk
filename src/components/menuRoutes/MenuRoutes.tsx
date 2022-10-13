import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";

import Main from "../main/Main";
import Communicate from "../communicate/Communicate";


import "./menuRoutes.sass"
import Deals from "../deals/Deals";
import Goals from "../goals/Goals";

class MenuRoutes extends Component {
    render() {
        return (
            <div className="col-offset-1 col-11">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/target" element={<Goals/>}/>
                    <Route path="/deals" element={<Deals/>}/>
                    <Route path="/communicate" element={<Communicate/>}/>
                </Routes>
            </div>
        );
    }
}

export default MenuRoutes