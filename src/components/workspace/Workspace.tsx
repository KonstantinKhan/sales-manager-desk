import React, {Component} from "react";

import "./workspace.sass"
import MenuRoutes from "../menuRoutes/MenuRoutes";

class Workspace extends Component {
    render() {
        return (
            <div className="workspace">
                <MenuRoutes/>
            </div>
        )
    }
}

export default Workspace