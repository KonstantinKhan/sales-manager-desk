import React, {Component} from 'react';

import "./app.sass"
import {BrowserRouter} from "react-router-dom";
import Navigation from "../navigation/Navigation";
import MenuRoutes from "../menuRoutes/MenuRoutes";
import {addLocale, locale} from "primereact/api";

class App extends Component {

    constructor(props: any) {
        super(props);
        addLocale('ru', {
            noFilter: 'Без фильтра',
            contains: 'Содержит'
        })
        locale('ru')
    }

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
