export const ViewAct = (data) => {
    return ({
        type: "Add",
        payload: data,
    })
}

export const ViewSingleAct = (id) => {
    return ({
        type: "View_Single_Product",
        payload: id,
    })
}

export const EditAct = (data) => {
    return ({
        type: "Edit_product",
        payload: data,
    })
}

export const getProduct = () => {
    return{
        type : "GET_PRODUCT"
    }
}

export const SingleDataEdit = (id) => {
    return {
        type: 'SingleProduct',
        payload: id
    }
}

export const DeleteAction = (id) => {
    return {
        type: "Delete_product",
        payload: id
    }
}
export const AddToCart = (data) => {
    return {
        type: "Add_to_Cart",
        payload: data
    }
}
export const AddDelete = (id) => {
    return {
        type: "Delete_Add_Product",
        payload: id
    }
}

export const View_single_Act = (data) => {
    return ({
        type: "View_single",
        payload: data,
    })
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}

// thunk

export const getAsyncUpdate = (data) => {
    return (dispatch) => {

        dispatch(loading())

        setTimeout(() => {
            dispatch(EditAct(data))
        }, 2000)
    }
}

export const getAsyncEdit = (id) => {
    return (dispatch) => {

        dispatch(loading())

        setTimeout(() => {
            dispatch(SingleDataEdit(id))
        }, 2500)
    }
}