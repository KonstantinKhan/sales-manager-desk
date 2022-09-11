import React, {Component, SyntheticEvent} from "react";
import target from "../../resources/icons/target.png";
import clients from "../../resources/icons/clients.png";
import communicate from "../../resources/icons/communicate.png";
import handshake from "../../resources/icons/handshake.png";
import toDoList from "../../resources/icons/to-do-list.png";
import ability from "../../resources/icons/ability.png";
import kpi from "../../resources/icons/kpi.png";
import home from "../../resources/icons/home.png";
import {Link} from "react-router-dom";

import "./mainMenu.sass"

interface State {
    activeMenu: boolean,
    activeItem: boolean
}

class MainMenu extends Component<any, State> {

    state = {
        activeMenu: false,
        activeItem: false
    }

    goHome = (e: SyntheticEvent) => {

        const menu = e.currentTarget.parentElement
        if (menu != null) {
            Array.from(menu.children).forEach(item => {
                item.classList.remove('row_active')
            })
        }

        this.setState({
            activeMenu: false
        })
    }

    onToggle = (e: SyntheticEvent) => {

        if (!this.state.activeMenu) {
            this.setState({
                activeMenu: true
            })
            e.currentTarget.classList.add('row_active')
        } else {
            const menu = e.currentTarget.parentElement
            if (menu != null) {
                Array.from(menu.children).forEach(item => {
                    item.classList.remove('row_active')
                })
            }
            e.currentTarget.classList.add('row_active')
        }
    }

    render() {

        const {activeMenu} = this.state
        const home = activeMenu ? <Home goHome={this.goHome}/> : null

        return (
            <ul className={this.state.activeMenu ? "menu menu_active" : "menu"}>
                <li
                    key={0}
                    className="row__first"
                    style={{"--i": 0} as React.CSSProperties}
                    onClick={this.onToggle}
                ><img draggable={false} src={target} alt="target"/>
                </li>
                <li
                    key={1}
                    className="row__first"
                    style={{"--i": 1} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <img draggable={false} src={clients} alt="target"/>
                </li>
                <li
                    key={2}
                    className="row__first"
                    style={{"--i": 2} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <Link to="/communicate">
                        <img draggable={false} src={communicate} alt="target"/>
                    </Link>
                </li>
                <li
                    key={3}
                    className="row__second"
                    style={{"--i": 0} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <Link to="/handshake">
                        <img draggable={false} src={handshake} alt="handshake"/>
                    </Link>
                </li>
                <li
                    key={4}
                    className="row__second"
                    style={{"--i": 1} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <img draggable={false} src={toDoList} alt="target"/>
                </li>
                <li
                    key={5}
                    className="row__second"
                    style={{"--i": 2} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <img draggable={false} src={ability} alt="target"/>
                </li>
                <li
                    key={6}
                    className="row__third"
                    style={{"--i": 0} as React.CSSProperties}
                    onClick={this.onToggle}
                >
                    <img draggable={false} src={kpi} alt="kpi"/>
                </li>
                {home}
            </ul>
        )
    }
}

interface Props {
    goHome: (e: SyntheticEvent) => void
}

const Home = (props: Props) => {
    return (
        <li
            className="home home_hidden"
            onClick={props.goHome}
        >
            <Link to="/">
                <img draggable={false} src={home} alt="home"/>
            </Link>
        </li>
    )
}

export default MainMenu