import React, {Component} from "react";

import {Link} from "react-router-dom";
import target from "../../resources/icons/target.png";
import clients from "../../resources/icons/clients.png";
import communicate from "../../resources/icons/communicate.png";
import handshake from "../../resources/icons/handshake.png";
import toDoList from "../../resources/icons/to-do-list.png";
import ability from "../../resources/icons/ability.png";
import kpi from "../../resources/icons/kpi.png"

import "./navigation.sass"

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li key={0}>
                        <Link className="menu__item" to="/target">
                            <img draggable={false} src={target} alt="target"/>
                            <span>Цели</span>
                        </Link>
                    </li>
                    <li key={1}>
                        <Link className="menu__item" to="/clients">
                            <img draggable={false} src={clients} alt="clients"/>
                            <span>Клиенты</span>
                        </Link>
                    </li>
                    <li key={2}>
                        <Link className="menu__item" to="/communicate">
                            <img draggable={false} src={communicate} alt="communicate"/>
                            <span>Контакты</span>
                        </Link>
                    </li>
                    <li key={3}>
                        <Link className="menu__item" to="/handshake">
                            <img draggable={false} src={handshake} alt="handshake"/>
                            <span>Сделки</span>
                        </Link>
                    </li>
                    <li key={4}>
                        <Link className="menu__item" to="/todo">
                            <img draggable={false} src={toDoList} alt="todo"/>
                            <span>Задачи</span>
                        </Link>
                    </li>
                    <li key={5}>
                        <Link className="menu__item" to="/ability">
                            <img draggable={false} src={ability} alt="ability"/>
                            <span>Возможности</span>
                        </Link>
                    </li>
                    <li key={6}>
                        <Link className="menu__item" to="/kpi">
                            <img draggable={false} src={kpi} alt="KPI"/>
                            <span>KPI</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation