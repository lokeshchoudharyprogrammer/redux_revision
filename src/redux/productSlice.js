const { createSlice } = require('@reduxjs/toolkit');


const STATUSES = Object.freeze({
    IDEL: 'idel',
    ERROR: "error",
    LOADING: "loading"
})

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        status: STATUSES.IDEL,
        data: []

    },
    reducers: {
        setProduct(state, action) {

            state.data = action.payload;
        }

    }
});

export const { add, remove } = ProductSlice.actions;
export default ProductSlice.reducer;



// Thunks

