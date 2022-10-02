import {IGrossProfit} from "../../models/IGrossProfit";

import "./planProgressSector.sass"

interface PlanProps {
    grossProfit: IGrossProfit
}

export function PlanProgressSector({grossProfit}: PlanProps) {

    return (
        <div className="card grid grid-nogutter">
            <div className="progress__chart col-5">
                {/*<div*/}
                {/*    style={*/}
                {/*        {*/}
                {/*            position: 'absolute',*/}
                {/*            width: '100%',*/}
                {/*            top: '165px',*/}
                {/*            borderBottom: '1px solid #000',*/}
                {/*            color: '#000'*/}
                {/*        }*/}
                {/*    }*/}
                {/*></div>*/}
                <svg>
                    <circle cx="100" cy="100" r="80"></circle>
                    <circle cx="100" cy="100" r="80"></circle>
                    <circle
                        cx="100" cy="100" r="80"
                        style={
                            {
                                strokeDashoffset: `calc(628px - (628px * ${grossProfit.percent} * 0.6) / 100)`
                            }
                        }
                    ></circle>
                </svg>
                <span className="percent">{grossProfit.percent}%</span>
            </div>
            <div className="progress__value col-5">
                <span
                    className="progress__value__fact">{(grossProfit.value).toLocaleString('RU', {minimumFractionDigits: 0})}
                    <span className="progress__value__currency"> руб.</span>
                </span>
                <span
                    className="progress__value__plan">из {(grossProfit.plan).toLocaleString('RU', {minimumFractionDigits: 0})}
                    <span className="progress__value__currency"> руб.</span>
                </span>
            </div>
        </div>
    )
}