import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navs: ["Software","Websites","Applications","Data", "Utilities"]
}

const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{}

})

export const selectNavs = state => state.nav.navs

export default navSlice.reducer