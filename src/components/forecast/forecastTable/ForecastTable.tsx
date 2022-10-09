/* eslint-disable react-hooks/exhaustive-deps */
import "./forecastTable.sass"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column"
import {FilterMatchMode, FilterOperator, InputNumber, MultiSelect} from "primereact";
import {useGetDealsQuery} from "../../../redux";
import {useAppSelector} from "../../../redux/hooks";

const ForecastTable = () => {

    const probabilities = [
        {name: '15%', value: 15},
        {name: '25%', value: 25},
        {name: '40%', value: 40},
        {name: '60%', value: 60},
        {name: '80%', value: 80},
        {name: '100%', value: 100},
    ]

    const probability = useAppSelector(state => state.probability.probability.value && [state.probability.probability.value])

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
        return <MultiSelect
            value={options.value}
            options={probabilities}
            itemTemplate={probabilityItemTemplate}
            onChange={(e) => options.filterApplyCallback(e.value)}
            optionLabel="name"
            placeholder="Все"
            // maxSelectedLabels={1}
        />
    }

    const probabilityItemTemplate = (option: any) => {
        return (
            <div className="p-multiselect-representative-option">
                <span className="image-text">{option.value}%</span>
            </div>
        )
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
        "probability": {value: probability, matchMode: FilterMatchMode.IN},
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
                    filterPlaceholder="Найти...">
                </Column>
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
                    showFilterMenu={false}
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