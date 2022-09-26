import "./salesFunnelForecast.sass"
import {Forecast} from "../forecast/Forecast";
import {StubForecastFourth, StubForecastOne, StubForecastSecond, StubForecastThird} from "../../stubs/Forecast";

export const SalesFunnelForecast = () => {

    const firstX = 60
    const secondX = 90
    const forecast = StubForecastSecond

    const maxValue = Math.round(Math.max(...forecast.stages.map(stage => stage.value)) / 140)
    const sum = forecast.stages.map(stage => stage.value).reduce((s, e) => {
        return s + e
    }, 0)

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
        <div className={'sales-funnel__container'}>
            <div className={'sales-funnel__header'}>
                <span className={'sales-funnel__header__title'}>Воронка продаж</span>
                <span className={'sales-funnel__header__period'}>05 сентября, 2022 - 30 сентября 2022</span>
            </div>
            <div className={'sales-funnel__diagram'}>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>15%</span>
                        <span
                            className={'sales-funnel__stage__info__value'}>{(forecast.stages[0].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[0].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[0].value)} 
                            Q ${firstX} ${secondY(forecast.stages[0].value, forecast.stages[1].value)}
                            ${secondX} ${thirdY(forecast.stages[0].value, forecast.stages[1].value)}
                            T 164 ${Math.round(150 - forecast.stages[1].value / maxValue)}
                            V 149 H 0 Z`}
                            fill="#E1BEE7"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.4s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>25%</span>
                        <span className={'sales-funnel__stage__info__value'}>{(forecast.stages[1].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[1].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[1].value)} 
                            Q ${firstX} ${secondY(forecast.stages[1].value, forecast.stages[2].value)} 
                            ${secondX} ${thirdY(forecast.stages[1].value, forecast.stages[2].value)} 
                            T 164 ${Math.round(150 - forecast.stages[2].value / maxValue)}
                            V 149 H 0 Z`}
                            fill="#CE93D8"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.5s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>40%</span>
                        <span className={'sales-funnel__stage__info__value'}>{(forecast.stages[2].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[2].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[2].value)}  
                            Q ${firstX} ${secondY(forecast.stages[2].value, forecast.stages[3].value)}
                            ${secondX} ${thirdY(forecast.stages[2].value, forecast.stages[3].value)}
                            T 164 ${Math.round(150 - forecast.stages[3].value / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#BA68C8"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.6s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>60%</span>
                        <span className={'sales-funnel__stage__info__value'}>{(forecast.stages[3].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[3].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[3].value)}  
                            Q ${firstX} ${secondY(forecast.stages[3].value, forecast.stages[4].value)} 
                            ${secondX} ${thirdY(forecast.stages[3].value, forecast.stages[4].value)} 
                            T 164 ${Math.round(150 - forecast.stages[4].value / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#AB47BC"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.7s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>80%</span>
                        <span className={'sales-funnel__stage__info__value'}>{(forecast.stages[4].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[4].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[4].value)}  
                            Q ${firstX} ${secondY(forecast.stages[4].value, forecast.stages[5].value)} 
                            ${secondX} ${thirdY(forecast.stages[4].value, forecast.stages[5].value)} 
                            T 164 ${Math.round(150 - forecast.stages[5].value / maxValue)}  
                            V 149 H 0 Z`}
                            fill="#9C27B0"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.8s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__stage__info'}>
                        <span className={'sales-funnel__stage__info__title'}>100%</span>
                        <span className={'sales-funnel__stage__info__value'}>{(forecast.stages[5].value / 1000).toLocaleString('RU', {minimumFractionDigits: 0})}K</span>
                        <span className={'sales-funnel__stage__info__percent'}>{(forecast.stages[5].value/sum * 100).toFixed(1).replace('.',',')}%</span>
                    </div>
                    <svg width="165" height="150" viewBox="0 0 165 150" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={`M0 ${firstY(forecast.stages[5].value)}  
                            Q ${firstX} ${secondY(forecast.stages[5].value, forecast.stages[5].value * 0.85)} 
                            ${secondX} ${thirdY(forecast.stages[5].value, forecast.stages[5].value * 0.85)} 
                            T 164 ${Math.round(150 - forecast.stages[5].value * 0.85 / maxValue)} 
                            V 149 H 0 Z`}
                            fill="#8E24AA"
                            stroke="#C0CA33"/>
                        <animate
                            attributeName={'viewBox'}
                            from={'0 -124 165 150'}
                            to={'0 0 165 150'}
                            dur={'.9s'}
                            fill={'freeze'}
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}