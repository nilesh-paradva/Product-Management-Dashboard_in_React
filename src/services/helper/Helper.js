export const getProducts = () => JSON.parse(localStorage.getItem("Products")) || [];
export const AddgetProducts = () => JSON.parse(localStorage.getItem("AddProducts")) || [];