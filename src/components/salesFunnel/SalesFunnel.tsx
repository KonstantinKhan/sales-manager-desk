import {Component} from "react";

import "./salesFunnel.sass"

interface State {
    funnel: Stage[]

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
        ]
    }

    render() {

        const funnel = this.state.funnel.map(stage => {
                return <View name={stage.name} count={stage.count}/>
            }
        )


        return (
            <div style={
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

const
    View = (stage: Stage) => {
        return (
            <div
                className="stage"
                style={
                    {
                        width: stage.count * 20
                    }
                }>
                <p>Сделки {stage.name}: {stage.count}</p>
            </div>
        )
    }

export default SalesFunnel