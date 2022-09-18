import "./forecast.sass"

export function Forecast() {
    return (
        <div className="card">
            <div className="plan__probability__off">
                <span>ВП без вероятности: </span>
                <span className="gross-profit">3 600 000 руб.</span>
                <div className="plan__line">
                    <div className="fact__line">
                        <div className="forecast__off__line"></div>
                    </div>
                </div>

                <div className="plan__threshold__value plan__threshold__value_active"></div>
            </div>
            <div className="plan__probability__on">
                <span>ВП с вероятностью: </span>
                <span className="gross-profit">2 000 000 руб.</span>
                <div className="plan__line">
                    <div className="fact__line">
                        <div className="forecast__on__line"></div>
                    </div>
                </div>
                <div className="plan__threshold__value"></div>
            </div>
        </div>
    )
}