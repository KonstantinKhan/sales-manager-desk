import { Component } from "react";
import Stage from "../stage/Stage";

import "./salesFunnel.sass"

interface State {


}

interface Props {

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
            return <Stage
                stageProps={stage}
            />
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

export default SalesFunnel