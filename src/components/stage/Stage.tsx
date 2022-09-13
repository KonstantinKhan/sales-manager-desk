import { Component } from "react";

import StageDetails from "../stageDetails/StageDetails"

interface StageProps {
    name: string,
    count: number
}

interface Props {
    stageProps: StageProps
}

interface State {
    hovering: boolean
}

class Stage extends Component<Props, State> {

    state = {
        hovering: false
    }

    onShowDetails = () => {
        this.setState({
            hovering: true
        })
    }

    onHiddenDetails = () => {
        this.setState({
            hovering: false
        })
    }

    render() {
        return (
            <div
                onMouseOver={this.onShowDetails}
                onMouseLeave={this.onHiddenDetails}
                className="stage"
                style={
                    {
                        position: "relative",
                        width: this.props.stageProps.count * 20
                    }
                }>
                <p>Сделки {this.props.stageProps.name}: {this.props.stageProps.count}</p>
                {this.state.hovering ? <StageDetails /> : null}
            </div>
        )
    }
}

export default Stage