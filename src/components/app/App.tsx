import React, {Component} from 'react';

import "./app.sass"
import {BrowserRouter} from "react-router-dom";
import Navigation from "../navigation/Navigation";
import MenuRoutes from "../menuRoutes/MenuRoutes";

class App extends Component {

    render() {

        return (
            <>
                <BrowserRouter>
                    <div className="container">
                        <Navigation/>
                        <div>
                            <MenuRoutes/>
                        </div>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
