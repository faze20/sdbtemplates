import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navs: ["Software","Websites","App's","Data", "Academy"]
}

const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{}

})

export const selectNavs = state => state.nav.navs

export default navSlice.reducer