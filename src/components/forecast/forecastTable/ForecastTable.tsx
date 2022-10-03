/* eslint-disable react-hooks/exhaustive-deps */
import "./forecastTable.sass"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column"
import {useEffect, useState} from "react";
import {DealsService} from "../../../services/dealsService";
import {IDeal} from "../../../models/IDeal";

const ForecastTable = () => {

    const [deals, setDeals] = useState<IDeal[]>([])
    const dealsService = new DealsService()

    useEffect(() => {
        console.log('effect')
        dealsService.getDeals().then(data => {
            setDeals(data)
        })
    }, [])

    return (
        <div className={'bg-white'}>
            <DataTable
                value={deals}
                filterDisplay="row"
            >
                <Column field={'name'} header={'Клиенты'}
                        sortable filter
                        filterPlaceholder="Search by name"></Column>
                <Column field={'sum'} header={'Сумма сделки'} sortable filter></Column>
                <Column field={'probability'} header={'Сумма сделки с вероятностью'}></Column>
            </DataTable>
        </div>
    )
}

export default ForecastTable