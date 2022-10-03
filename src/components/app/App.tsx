import React, {Component} from 'react';

import "./app.sass"
import {BrowserRouter} from "react-router-dom";
import Navigation from "../navigation/Navigation";
import MenuRoutes from "../menuRoutes/MenuRoutes";
import {addLocale, locale, localeOption, localeOptions, updateLocaleOption} from "primereact";

class App extends Component {

    constructor(props: any) {
        super(props);
        addLocale('ru', {
            noFilter: 'Без фильтра',
            contains: 'Содержит'
        })
        locale('ru')
        console.log(localeOption('noFilter', 'ru'))
        updateLocaleOption('noFilter', 'Очистить', 'ru')
        updateLocaleOption('noFilter', 'CLEAR', 'en')
        console.log(localeOption('noFilter', 'ru'))
        console.log(localeOptions('en'))
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
