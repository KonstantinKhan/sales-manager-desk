import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
import target from "../../resources/icons/target.png";
import clients from "../../resources/icons/clients.png";
import communicate from "../../resources/icons/communicate.png";
import handshake from "../../resources/icons/handshake.png";
import toDoList from "../../resources/icons/to-do-list.png";
import ability from "../../resources/icons/ability.png";
import kpi from "../../resources/icons/kpi.png"
import main from "../../resources/icons/main.png"

import "./navigation.sass"

class Navigation extends Component {
    render() {
        return (
            <div className="navigation col-1">
                <ul>
                    <li key={0}>
                        <NavLink 
                            className="menu__item" to="/">
                            <img draggable={false} src={main} alt="target" />
                            <span>Главная</span>
                        </NavLink>
                    </li>
                    <li key={1}>
                        <NavLink className="menu__item" to="/target">
                            <img draggable={false} src={target} alt="target" />
                            <span>Цели</span>
                        </NavLink>
                    </li>
                    <li key={2}>
                        <NavLink className="menu__item" to="/clients">
                            <img draggable={false} src={clients} alt="clients" />
                            <span>Клиенты</span>
                        </NavLink>
                    </li>
                    <li key={3}>
                        <NavLink className="menu__item" to="/communicate">
                            <img draggable={false} src={communicate} alt="communicate" />
                            <span>Контакты</span>
                        </NavLink>
                    </li>
                    <li key={4}>
                        <NavLink 
                            className="menu__item" to="/deals">
                            <img draggable={false} src={handshake} alt="handshake" />
                            <span>Сделки</span>
                        </NavLink>
                    </li>
                    <li key={5}>
                        <NavLink className="menu__item" to="/todo">
                            <img draggable={false} src={toDoList} alt="todo" />
                            <span>Задачи</span>
                        </NavLink>
                    </li>
                    <li key={6}>
                        <NavLink className="menu__item" to="/ability">
                            <img draggable={false} src={ability} alt="ability" />
                            <span>Возможности</span>
                        </NavLink>
                    </li>
                    <li key={7}>
                        <NavLink className="menu__item" to="/kpi">
                            <img draggable={false} src={kpi} alt="KPI" />
                            <span>KPI</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation