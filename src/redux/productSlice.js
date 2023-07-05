const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');


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
        },
        setStatus(state, action) {

            state.status = action.payload

        }


    }

    // extraReducer: (builder) => {

    //     builder.addCase(FetchProducts.pending, (state, action) => {
    //         state.status = STATUSES.LOADING

    //     }).addCase(FetchProducts.fulfilled, (state, action) => {
    //         state.data = action.payload;
    //         state.status = STATUSES.IDEL


    //     }).addCase(FetchProducts.rejected, (state, action) => {
    //         state.status = STATUSES.ERROR

    //     })


    // }
});

export const { setProduct, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;



// Thunks


export function FetchProducts() {

    return async function FetchProductThunk(dispatch, getState) {

        dispatch(setStatus(STATUSES.LOADING))


        try {
            let res = await fetch('https://fakestoreapi.com/products')

            let data = await res.json()

            dispatch(setProduct(data))


            dispatch(setStatus(STATUSES.IDEL))
        } catch (error) {

            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))

        }

    }

}

// export const FetchProducts = createAsyncThunk('products/fetch', async () => {

//     let res = await fetch('https://fakestoreapi.com/products')

//     let data = await res.json()


//     return data;

// })