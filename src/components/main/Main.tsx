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
        <div>
            {/*<PlanProgress/>*/}
            <PlanProgressSector grossProfit={grossProfit}/>
            <Forecast/>
            <SalesFunnelForecast/>
        </div>
    );
}


export default Main