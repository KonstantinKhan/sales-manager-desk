/* eslint-disable react-hooks/exhaustive-deps */
import "./forecastTable.sass"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column"
import {useEffect, useState} from "react";
import {DealsService} from "../../../services/dealsService";
import {IDeal} from "../../../models/IDeal";
import {ColumnGroup, FilterMatchMode, FilterOperator, FilterService, InputNumber, Row} from "primereact";

const ForecastTable = () => {

    const [deals, setDeals] = useState<IDeal[]>([])
    const dealsService = new DealsService()

    useEffect(() => {
        dealsService.getDeals().then(data => {
            setDeals(data)
        })
    }, [])

    // Константа для определения порядкового номера строки
    // const rowIndexTemplate = (rowData: any, column: any) => {
    //     return column.rowIndex + 1
    // }

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
                {/*Колонка отображения порядкового номера строки*/}
                {/*<Column field="i" header="№" body={rowIndexTemplate}></Column>*/}
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
                ></Column>
                <Column
                    field="probability"
                    header="Вероятность"
                    sortable
                    filter
                    body={probabilityFormat}
                />
                <Column
                    header={'ВПсВ'}
                    filterField="sumProbability"
                    dataType="numeric"
                    sortable
                    filter
                    body={sumProbabilityFormat}
                    filterElement={sumProbabilityFilter}
                />
            </DataTable>
        </div>
    )
}

export default ForecastTable