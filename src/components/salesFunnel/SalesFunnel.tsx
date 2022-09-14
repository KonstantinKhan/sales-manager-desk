import { Component } from "react";
import Stage from "../stage/Stage";
import StageDetails from "../stageDetails/StageDetails";

import "./salesFunnel.sass"

interface State {
    hovering: boolean   
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
        ],
        hovering: false
    }

    onShow = (show: boolean) => {
        this.setState({
            hovering: show
        })
    }

    render() {
        const funnel = this.state.funnel.map(stage => {
            return <Stage
                onShow={this.onShow}
                stageProps={stage}
            />
        }
        )


        return (
            <div
                style={
                    {
                        position: 'relative',
                        top: '20px',
                        left: '20px',
                        width: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        padding: '10px',
                        borderRadius: '16px'
                    }
                }>
                {funnel}
                {this.state.hovering ? <StageDetails/> : null}
            </div>
        )
    }
}

export default SalesFunnel