import {createSlice} from "@reduxjs/toolkit";

interface Probability {
    value: number | null
}

const probabilitySlice = createSlice({
    name: "probability",
    initialState: {
        probability: {value: null} as Probability
    },
    reducers: {
        setProbability(state, action) {
            state.probability.value = action.payload
        },
        setDefaultProbability(state) {
            state.probability.value = null
        }
    }
})

export const {setProbability, setDefaultProbability} = probabilitySlice.actions

export default probabilitySlice.reducer