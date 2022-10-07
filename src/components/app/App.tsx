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
            startsWith: 'Начинается с',
            contains: 'Содержит',
            notContains: 'Не содержит',
            endsWith: 'Заканчивается',
            equals: 'Равно',
            notEquals: 'Не равно',
            noFilter: 'Без фильтра'
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
