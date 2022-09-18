import "./planProgress.sass"
import React, {Component} from "react";

interface Props {

}

interface State {

}

class PlanProgress extends Component<Props, State> {


    render() {

        return (
            <div className="plan-volume">
                <div className="full"></div>
                <div className="threshold"></div>
                <ScaleItems/>
            </div>
        )
    }
}

const ScaleItems = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const items = list.map(item => {
        return (
            <li className="scale__item" style={{"--i": item} as React.CSSProperties}>{item * 10}</li>
        )
    })
    return (
        <ul className="scale">
            {items}
        </ul>
    )
}

export default PlanProgress