import { Component } from "react";

interface StageProps {
    name: string,
    count: number
}

interface Props {
    stageProps: StageProps
    onShow: (show: boolean) => void
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
        },
            () => {
                this.props.onShow(this.state.hovering)
            }
        )
    }

    onHiddenDetails = () => {
        this.setState({
            hovering: false
        },
            () => {
                this.props.onShow(this.state.hovering)
            })

    }

    render() {
        return (
            <div
                onMouseEnter={this.onShowDetails}
                onMouseLeave={this.onHiddenDetails}
                className="stage"
                style={
                    {
                        position: "relative",
                        width: this.props.stageProps.count * 20
                    }
                }>
                <p>Сделки {this.props.stageProps.name}: {this.props.stageProps.count}</p>
                {/* {this.state.hovering ? <StageDetails /> : null} */}
            </div>
        )
    }
}

export default Stage