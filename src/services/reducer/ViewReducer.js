import { AddgetProducts, getProducts } from "../helper/Helper";

const initialState = {
    products: getProducts(),
    // allProducts: [],
    product: null,
    AddProducts: AddgetProducts(),
    isLoading: false,
};

const updateLocalStorage = (key, data) => (localStorage.setItem(key, JSON.stringify(data)));


export const ViewReducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            const ProductId = { ...action.payload, id: Math.floor(Math.random() * 10000) };
            const updatedProducts = [...state.products, ProductId];
            localStorage.setItem('Products', JSON.stringify(updatedProducts));
            return { ...state, products: updatedProducts, isLoading: false };

        case "SingleProduct":

            let rec1 = JSON.parse(localStorage.getItem("Products"));

            const singleData = rec1.find(product => product.id == action.payload);
            console.log(singleData);
            
            return { ...state, product: singleData, isLoading: false };

        case "Edit_product":

            // const recorsGet = getProducts()
            const updatedData = getProducts().map((rec) => {
                if ((rec).id == action.payload.id) {
                    return action.payload;
                } else {
                    return (rec);
                }
            });

            localStorage.setItem("Products", JSON.stringify(updatedData));
            return { ...state, products: updatedData, product: null, isLoading: false };

        case "Delete_product":
        case "Delete_Add_Product":
            const targetList = action.type === "Delete_product" ? getProducts() : AddgetProducts();
            const updatedDeleteData = targetList.filter(product => product.id != action.payload);
            updateLocalStorage(action.type === "Delete_product" ? "Products" : "AddProducts", updatedDeleteData);
            return { ...state, [action.type === "Delete_product" ? "products" : "AddProducts"]: updatedDeleteData };

        case "Add_to_Cart":
            const productToAdd = action.payload;
            const updatedCart = [...state.AddProducts, productToAdd];
            localStorage.setItem("AddProducts", JSON.stringify(updatedCart));
            return { ...state, AddProducts: updatedCart };

        case 'LOADING':
            return { ...state, isLoading: true }

        default:
            return state;
    }
};