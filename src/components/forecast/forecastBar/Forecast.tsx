import "./forecast.sass"
import {Link} from "react-router-dom";

export function Forecast() {

    return (
        <div className="card grid grid-nogutter">
            <div className="plan__probability__off col-offset-1 col-10 pt-4">
                <span>ВП без вероятности: </span>
                <span className="gross-profit">3 600 000 руб.</span>
                <div className="plan__line">
                    <div className="fact__line">
                        <Link to="/deals">
                            <div className="forecast__off__line"></div>
                        </Link>
                    </div>
                </div>

                <div className="plan__threshold__value plan__threshold__value_active"></div>
            </div>
            <div className="plan__probability__on col-offset-1 col-10 pt-4">
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