import React, {useEffect, useState} from "react"
import "./segmentDiagram.sass"

interface IProps {
    height: number,
    width: number,
    strokeWidth: number
}

const SegmentDiagram = (props: IProps) => {

    const {height, width, strokeWidth} = props

    const [coordinateX, setCoordinateX] = useState(0)
    const [coordinateY, setCoordinateY] = useState(0)
    const [radius, setRadius] = useState(0)
    const [circumference, setCircumference] = useState(0)

    const calcRadius = (height: number, width: number) => {
        return Math.min(height, width) / 2
    }

    useEffect(() => {
        setCoordinateX(width / 2)
        setCoordinateY(height / 2)
        setRadius(calcRadius(height - strokeWidth, width - strokeWidth))
        setCircumference(2 * Math.PI * radius)
    }, [height, radius, strokeWidth, width])

    return (
        <>
            <svg
                style={
                    {
                        height: height,
                        width: width
                    }
                }
            >
                <circle
                    cx={coordinateX} cy={coordinateY} r={radius}
                    style={
                        {
                            strokeWidth: `${strokeWidth}px`,
                            strokeDasharray: circumference,
                            strokeDashoffset: circumference - circumference * 0.75
                        }
                    }
                ></circle>
                {/*<circle*/}
                {/*    cx="100" cy="100" r="80"*/}
                {/*    style={*/}
                {/*        {*/}
                {/*            strokeDashoffset: `calc(628px - (628px * 0.6) / 100)`*/}
                {/*        }*/}
                {/*    }*/}
                {/*></circle>*/}
            </svg>
        </>
    )
}

export default SegmentDiagram