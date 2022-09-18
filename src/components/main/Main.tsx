import "./main.sass"
import {PlanProgressSector} from "../planProgress/PlanProgressSector";
import {GrossProfitOne} from "../../stubs/GrossProfitOne";
import {useEffect, useState} from "react";
import {IGrossProfit} from "../../models/IGrossProfit";
import {Forecast} from "../forecast/Forecast";

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

            <button
                onClick={
                    () => {
                        setGrossProfit({
                            percent: 90,
                            plan: 10_000_000,
                            value: 9_000_000
                        })
                    }
                }
            >Click
            </button>
            <button
                onClick={
                    () => {
                        setGrossProfit({
                            percent: 40,
                            plan: 10_000_000,
                            value: 4_000_000
                        })
                    }
                }
            >Click
            </button>
        </div>
    );
}


export default Main