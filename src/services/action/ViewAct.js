export const ViewAct = (data) => {
    return ({
        type: "Add",
        payload: data,
    })
}

export const EditAct = (data) => {
    return ({
        type: "Edit_product",
        payload: data,
    })
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