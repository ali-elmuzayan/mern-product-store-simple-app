import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct:  async (newProduct) => {

        // validate the inputs
        if (!newProduct.name || !newProduct.price || !newProduct.img) {
            return {success:false, message: "please fill all fields"}
        }

        // send the response
        const res = await fetch("/api/v1/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        if (!res.ok) return {success: false, message: "something went wrong with the server"}


        const data = await res.json();
         set((state) => ({products: [...state.products, data.data]}));

        return {success: true, message: "product created successfully"}
    }
}))

