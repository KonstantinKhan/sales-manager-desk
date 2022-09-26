export interface IForecast {
    stages: IForecastStage[]
}

interface IForecastStage {
    name: string,
    value: number
}