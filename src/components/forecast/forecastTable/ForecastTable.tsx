/* eslint-disable react-hooks/exhaustive-deps */
import "./forecastTable.sass"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column"
import {useEffect, useState} from "react";
import {DealsService} from "../../../services/dealsService";
import {IDeal} from "../../../models/IDeal";
import {FilterMatchMode, FilterOperator, FilterService, InputNumber} from "primereact";

const ForecastTable = () => {

    const [deals, setDeals] = useState<IDeal[]>([])
    const dealsService = new DealsService()

    useEffect(() => {
        dealsService.getDeals().then(data => {
            setDeals(data)
        })
    }, [])

    const rowIndexTemplate = (rowData: any, column: any) => {
        return column.rowIndex + 1
    }

    const sumFormat = (rowData: any) => {
        return (rowData.sum).toLocaleString('RU', {minimumFractionDigits: 0}) + " руб."
    }

    const sumProbabilityFormat = (rowData: any) => {
        return (rowData.sumProbability).toLocaleString('RU', {minimumFractionDigits: 0}) + " руб."
    }

    const sumProbabilityFilter = (options: any) => {
        return <InputNumber value={options.value}
                            onChange={(e) => options.filterApplyCallback(e.value, options.index)}/>
    }

    const probabilityFormat = (rowData: any) => {
        return rowData.probability.toString() + "%"
    }

    const filters = {
        "name": {value: null, matchMode: FilterMatchMode.CONTAINS}
    }


    return (
        <div className={'bg-white'}>
            <DataTable
                value={deals}
                filterDisplay="row"
                autoLayout={true}
                filters={filters}
            >
                <Column field="i" header="№" body={rowIndexTemplate}></Column>
                <Column
                    filterField="name"
                    field="name"
                    header="Клиент"
                    sortable
                    filter
                    filterPlaceholder="Найти..."></Column>
                <Column
                    field={'sum'}
                    header={'ВП'}
                    sortable
                    filter
                    body={sumFormat}
                    align="right"
                ></Column>
                <Column
                    field="probability"
                    header="Вероятность"
                    sortable
                    filter
                    body={probabilityFormat}
                    align="center"
                />
                <Column
                    header={'ВПсВ'}
                    filterField="sumProbability"
                    dataType="numeric"
                    alignHeader="center"
                    sortable
                    filter
                    body={sumProbabilityFormat}
                    filterElement={sumProbabilityFilter}
                    align="right"
                />
            </DataTable>
        </div>
    )
}

export default ForecastTable