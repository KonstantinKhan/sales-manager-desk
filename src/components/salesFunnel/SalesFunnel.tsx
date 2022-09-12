import { Component } from "react";
import StageDetails from "../stageDetails/StageDetails";

import "./salesFunnel.sass"

interface State {
    funnel: Stage[],
    hovering: boolean

}

interface Props {

}

interface Stage {
    name: string,
    count: number
}

class SalesFunnel extends Component<Props, State> {

    state = {
        funnel: [
            {
                name: "15%",
                count: 30
            },
            {
                name: "25%",
                count: 22
            },
            {
                name: "40%",
                count: 14
            },
            {
                name: "60%",
                count: 8
            },
            {
                name: "80%",
                count: 3
            },
            {
                name: "100%",
                count: 2
            }
        ],
        hovering: false
    }

    showDetails() {
        console.log('show')
        this.setState({
            hovering: true
        })
    }

    hiddenDetails() {
        console.log('hidden')
        this.setState({
            hovering: false
        })
    }

    render() {

        const funnel = this.state.funnel.map(stage => {
            return <View 
                key={stage.count}
                stage={stage} 
                show={() => this.showDetails()}
                hidden={() => this.hiddenDetails()}
                hovering={this.state.hovering}/>
        }
        )


        return (
            <div
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }>
                {funnel}

            </div>
        )
    }
}

interface PropsView {
    stage: Stage,
    show: () => void,
    hidden: () => void,
    hovering: boolean
}

const
    View = (props: PropsView) => {
        return (
            <div
                onMouseOver={props.show}
                onMouseLeave={props.hidden}
                className="stage"
                style={
                    {
                        width: props.stage.count * 20
                    }
                }>
                <p>Сделки {props.stage.name}: {props.stage.count}</p>
                {props.hovering ? <StageDetails /> : null}
            </div>
        )
    }

export default SalesFunnel