/* eslint-disable react-hooks/exhaustive-deps */
import "./forecastTable.sass"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column"
import {FilterMatchMode, InputNumber} from "primereact";
import {useGetDealsQuery} from "../../../redux";

const ForecastTable = () => {

    const {data = []} = useGetDealsQuery()

    const sumFormat = (rowData: any) => {
        return (rowData.sum).toLocaleString('RU', {minimumFractionDigits: 0}) + " руб."
    }

    const sumProbabilityFormat = (rowData: any) => {
        return (rowData.sumProbability).toLocaleString('RU', {minimumFractionDigits: 0}) + " руб."
    }

    const sumFilter = (options: any) => {
        return <InputNumber
            value={options.value}
            onChange={(e) => options.filterApplyCallback(e.value)}/>
    }

    const probabilityFilter = (options: any) => {
        return <InputNumber
            value={options.value}
            onChange={(e) => options.filterApplyCallback(e.value)}/>
    }

    const sumProbabilityFilter = (options: any) => {
        return <InputNumber
            value={options.value}
            onChange={(e) => options.filterApplyCallback(e.value)}/>
    }

    const probabilityFormat = (rowData: any) => {
        return rowData.probability.toString() + "%"
    }

    const matchModesName = [
        {label: "Содержит", value: FilterMatchMode.CONTAINS},
        {label: "Не содержит", value: FilterMatchMode.NOT_CONTAINS}
    ]

    const filters = {
        "name": {value: null, matchMode: FilterMatchMode.CONTAINS},
        "sum": {value: null, matchMode: FilterMatchMode.EQUALS},
        "probability": {value: null, matchMode: FilterMatchMode.EQUALS},
        "sumProbability": {value: null, matchMode: FilterMatchMode.EQUALS}
    }

    return (
        <div className={'bg-white'}>
            <DataTable
                value={data}
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
                    filterMatchModeOptions={matchModesName}
                    sortable
                    filter
                    filterPlaceholder="Найти..."></Column>
                <Column
                    header="ВП"
                    field="sum"
                    dataType="numeric"
                    sortable
                    filter
                    body={sumFormat}
                    filterElement={sumFilter}
                ></Column>
                <Column
                    header="Вероятность"
                    field="probability"
                    dataType="numeric"
                    sortable
                    filter
                    body={probabilityFormat}
                    filterElement={probabilityFilter}
                />
                <Column
                    header="ВПсВ"
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