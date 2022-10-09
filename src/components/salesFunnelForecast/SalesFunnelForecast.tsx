import {useGetDealsQuery} from "../../redux";

import "./salesFunnelForecast.sass"
import {StubForecastFourth, StubForecastOne, StubForecastSecond, StubForecastThird} from "../../stubs/Forecast";
import {IDeal} from "../../models/IDeal";
import {useEffect, useState} from "react";

export const SalesFunnelForecast = () => {

    const [maxValue, setMaxValue] = useState(0)
    const [sum, setSum] = useState(0)
    const [percent15, setPercent15] = useState(0)
    const [percent25, setPercent25] = useState(0)
    const [percent40, setPercent40] = useState(0)
    const [percent60, setPercent60] = useState(0)
    const [percent80, setPercent80] = useState(0)
    const [percent100, setPercent100] = useState(0)
    const {data = [] as IDeal[]} = useGetDealsQuery()

    useEffect(() => {
        setMaxValue(Math.round(Math.max(...data.map<number>(value => value.sum))) / 140)
        setSum(data.map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent15(data.filter(value => value.probability === 15).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent25(data.filter(value => value.probability === 25).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent40(data.filter(value => value.probability === 40).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent60(data.filter(value => value.probability === 60).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent80(data.filter(value => value.probability === 80).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
        setPercent100(data.filter(value => value.probability === 100).map<number>(value => value.sum).reduce((sum, value) => sum + value, 0))
    }, [data])


    const firstX = 60
    const secondX = 90

    const firstY = (y: number) => Math.round(150 - y / maxValue)

    const secondY = (current: number, next: number) => {
        if (current >= next) {
            return Math.round(Math.abs(((150 - current / maxValue) - (150 - next / maxValue)) / 2) + 150 - current / maxValue) - 3
        } else {
            return Math.round(Math.abs(((150 - current / maxValue) - (150 - next / maxValue)) / 2) + (150 - next / maxValue)) + 3
        }
    }

    const thirdY = (current: number, next: number) => {
        if (current >= next) {
            return Math.round(Math.abs(((150 - current / maxValue) - (150 - next / maxValue)) / 2) + 150 - current / maxValue) + 3
        } else {
            return Math.round(Math.abs(((150 - current / maxValue) - (150 - next / maxValue)) / 2) + (150 - next / maxValue)) - 3
        }
    }

    return (
        <div className={'sales-funnel__container pt-4 col-12'}>
            <div className={'sales-funnel__header'}>
                <span className={'sales-funnel__header__title'}>Воронка продаж</span>
                <span className={'sales-funnel__header__period'}>05 сентября, 2022 - 30 сентября 2022</span>
            </div>
            <div className={'sales-funnel__diagram'}>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>15%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent15 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent15 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d={`M0 ${firstY(percent15)} 
                            Q ${firstX} ${secondY(percent15, percent25)}
                            ${secondX} ${thirdY(percent15, percent25)}
                            T 164 ${Math.round(150 - percent25 / maxValue)}
                            V 149 H 0 Z`}
                            fill="#E1BEE7"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.4s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>25%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent25 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent25 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(percent25)} 
                            Q ${firstX} ${secondY(percent25, percent40)} 
                            ${secondX} ${thirdY(percent25, percent40)} 
                            T 164 ${Math.round(150 - percent40 / maxValue)}
                            V 149 H 0 Z`}
                            fill="#CE93D8"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.5s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>40%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent40 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent40 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(percent40)}  
                            Q ${firstX} ${secondY(percent40, percent60)}
                            ${secondX} ${thirdY(percent40, percent60)}
                            T 164 ${Math.round(150 - percent60 / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#BA68C8"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.6s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>60%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent60 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent60 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(percent60)}  
                            Q ${firstX} ${secondY(percent60, percent80)} 
                            ${secondX} ${thirdY(percent60, percent80)} 
                            T 164 ${Math.round(150 - percent80 / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#AB47BC"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.7s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>80%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent80 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent80 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(percent80)}  
                            Q ${firstX} ${secondY(percent80, percent100)} 
                            ${secondX} ${thirdY(percent80, percent100)} 
                            T 164 ${Math.round(150 - percent100 / maxValue)}  
                            V 149 H 0 Z`}
                            fill="#9C27B0"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.8s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>100%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(percent100 / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span
                            className={'sales-funnel__stage__info__percent'}>{(percent100 / sum * 100).toFixed(1).replace('.', ',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(percent100)}  
                            Q ${firstX} ${secondY(percent100, percent100 * 0.85)} 
                            ${secondX} ${thirdY(percent100, percent100 * 0.85)} 
                            T 164 ${Math.round(150 - percent100 * 0.85 / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#8E24AA"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'0.9s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}