import { AddgetProducts, getProducts } from "../helper/Helper";

const initialState = {
    products: getProducts(),
    product: null,
    AddProducts: AddgetProducts(),
};

const updateLocalStorage = (key, data) => (localStorage.setItem(key, JSON.stringify(data)));

export const ViewReducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            const ProductId = { ...action.payload, id: Math.floor(Math.random() * 10000) };
            const updatedProducts = [...state.products, ProductId];
            localStorage.setItem('Products', JSON.stringify(updatedProducts));
            return { ...state, products: updatedProducts };

        case "SingleProduct":
            const singleData = getProducts().find(product => product.id == action.payload);
            return { ...state, product: singleData || null };

        case "Edit_product":
            const updatedData = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            });
            localStorage.setItem("Products", JSON.stringify(updatedData));
            return { ...state, products: updatedData, product: action.payload };

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
            
        default:
            return state;
    }
};