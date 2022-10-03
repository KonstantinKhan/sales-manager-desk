import {IDeal} from "../models/IDeal";

export class DealsService {
    getDeals(): Promise<IDeal[]> {
        return fetch('data/deals.json')
            .then(res => {
                return res.json()
            })
            .then(d => {
                return d.data
            })
    }
}