import "./forecast.sass"
import {Link} from "react-router-dom";
import {useGetDealsQuery} from "../../../redux";
import {useEffect, useState} from "react";
import {IDeal} from "../../../models/IDeal";
import {setDefaultProbability} from "../../../redux/probabilitySlice";
import {useDispatch} from "react-redux";


export function Forecast() {

    const widthLine = 500
    const plan = 10_000_000

    const {data = [] as IDeal[]} = useGetDealsQuery()
    const [forecast, setForecast] = useState(0)
    const [forecastProbability, setForecastProbability] = useState(0)
    const dispatch = useDispatch()

    const defaultProbability = () => dispatch(setDefaultProbability())

    useEffect(() => {
        setForecast(data.map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setForecastProbability(data.map<number>(value => value.sumProbability).reduce((sum, value) => sum + value, 0))
    }, [data])
    return (
        <div className="card grid grid-nogutter">
            <div className="plan__probability__off col-offset-1 col-10 pt-4">
                <span>ВП без вероятности: </span>
                <span className="gross-profit">{forecast.toLocaleString('RU')} руб.</span>
                <div className="plan__line">
                    <div className="fact__line">
                        <Link to="/deals">
                            <div
                                onClick={defaultProbability}
                                className="forecast__off__line"
                                style={{
                                    width: `${widthLine / plan * forecast}px`
                                }}
                            ></div>
                        </Link>
                    </div>
                </div>

                <div className="plan__threshold__value plan__threshold__value_active"></div>
            </div>
            <div className="plan__probability__on col-offset-1 col-10 pt-4">
                <span>ВП с вероятностью: </span>
                <span className="gross-profit">{forecastProbability.toLocaleString('RU')} руб.</span>
                <div className="plan__line">
                    <div className="fact__line">
                        <Link to="/deals">
                            <div
                                onClick={defaultProbability}
                                className="forecast__on__line"
                                style={{
                                    width: `${widthLine / plan * forecastProbability}px`
                                }}
                            ></div>
                        </Link>
                    </div>
                </div>
                <div className="plan__threshold__value"></div>
            </div>
        </div>
    )
}