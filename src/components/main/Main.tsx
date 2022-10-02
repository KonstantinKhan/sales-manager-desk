import "./main.sass"
import {PlanProgressSector} from "../planProgress/PlanProgressSector";
import {GrossProfitOne} from "../../stubs/GrossProfitOne";
import {useEffect, useState} from "react";
import {IGrossProfit} from "../../models/IGrossProfit";
import {Forecast} from "../forecast/Forecast";
import {SalesFunnelForecast} from "../salesFunnelForecast/SalesFunnelForecast";

function Main() {

    const [grossProfit, setGrossProfit] = useState<IGrossProfit>({
        percent: 0, plan: 0, value: 0
    })


    useEffect(() => {
        setGrossProfit(GrossProfitOne)
    }, [])

    return (
        <>
            <div className={'grid mr-0 ml-0'}>
                <div className={'col-offset-1 col-5'}>
                    <PlanProgressSector grossProfit={grossProfit}/>
                </div>
                <div className={'col-5'}>
                    <Forecast/>
                </div>
            </div>
            <div className={'col-offset-1 col-10'}>
                <SalesFunnelForecast/>
            </div>
        </>
    );
}


export default Main