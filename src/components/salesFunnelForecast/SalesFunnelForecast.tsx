import "./salesFunnelForecast.sass"

export const SalesFunnelForecast = () => {


    return (
        <div className={'sales-funnel__container'}>
            SalesFunnelForecast
            <div className={'sales-funnel'}>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>15%</span>
                    </div>
                    <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10 Q 35 11 47 16 T 98 22 V 200 H 0 Z" fill="#9575CD" stroke="#9575CD" strokeWidth="1"/>
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>25%</span>
                    </div>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22 Q 35 28 47 33 T 98 44" fill="none" stroke="red" strokeWidth="1"/>
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>40%</span>
                    </div>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 44 Q 35 47 47 54 T 98 64" fill="none" stroke="red" strokeWidth="1"/>
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>60%</span>
                    </div>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 64 Q 35 68 47 70 T 98 72" fill="none" stroke="red" strokeWidth="1"/>
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>80%</span>
                    </div>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 72 Q 35 78 47 81 T 98 84" fill="none" stroke="red" strokeWidth="1"/>
                    </svg>
                </div>
                <div className={'sales-funnel__stage'}>
                    <div className={'sales-funnel__header'}>
                        <span>100%</span>
                    </div>
                    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 84 Q 35 88 47 90 T 98 92" fill="none" stroke="red" strokeWidth="1"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}