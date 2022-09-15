import { Component } from "react";

import "./stage.sass"

interface StageProps {
    name: string,
    count: number

}

interface Props {
    stageProps: StageProps
    onShow: (show: boolean) => void,
    notification: boolean
}

interface State {
    hovering: boolean,
    notification: boolean
}

class Stage extends Component<Props, State> {

    componentDidMount(): void {
        this.setState({
            notification: this.props.notification
        })
    }

    state = {
        hovering: false,
        notification: false
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
                style={
                    {
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        margin: '8px',
                        paddingBottom: '8px',
                        borderBottom: '1px dashed rgba(0, 0, 0, .3)',
                        // backgroundColor: `${this.state.notification ? 'red' : 'none'}`,
                        // borderRadius: `${this.state.notification ? '16px' : '0px'}`
                    }
                }
            >
                <div
                    style={
                        {
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                            left: 0,
                        }
                    }
                >
                    <span className="stage__percent">{this.props.stageProps.name}</span>
                </div>
                <div
                    onMouseEnter={this.onShowDetails}
                    onMouseLeave={this.onHiddenDetails}
                    className="stage"
                    style={
                        {
                            marginLeft: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            position: "relative",
                            width: this.props.stageProps.count * 12,
                            boxShadow: `${this.state.notification ? '0 0 16px #E65100': 'none'}`
                        }
                    }>

                    <span
                        className="deals__count"
                    >
                        {this.props.stageProps.count}
                    </span>
                    {/* {this.state.hovering ? <StageDetails /> : null} */}
                </div>
            </div>
        )
    }
}

export default Stage