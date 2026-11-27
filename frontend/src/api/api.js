const API_URL = "http://localhost:5000";

const login = async (data) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to log in")
        }
        localStorage.setItem("token", responseData.user.token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        return responseData;





    } catch (error) {
        console.log(error.message);
        throw error;
    }

}
const registerUser = async (data) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to register")
        }

        return responseData;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function getAllProducts() {
    try {

        const response = await fetch(`${API_URL}/products/getAllProducts`, {
            method: "GET",


        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to get products")
        }

        return responseData.find;





    } catch (error) {
        console.log(error.message);
        throw error;
    }

}
async function getProductsById(id) {
    try {

        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "GET",


        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to retrieve product")
        }

        return responseData.get;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function getMyCart() {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${API_URL}/carts/getAllCarts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to get carts")
        }

       return responseData.get;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function updateCartProduct(productid, quantity) {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${API_URL}/carts/updateProductQuantity`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ productid, quantity })

        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to update carts!")
        }

        return responseData;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function deleteCartProduct(productid) {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${API_URL}/carts/deleteProduct`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({productid})
            

        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to delete carts!")
        }

        return responseData;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function getSumPrice() {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${API_URL}/carts/sumPrice`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to get sum")
        }

        return responseData.sum;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}
async function createCartProduct(productid, quantity) {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${API_URL}/carts/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ productid, quantity })

        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to create carts!")
        }

        return responseData;





    } catch (error) {
        console.log(error.message);
        throw error;
    }


}



export { login, registerUser, getAllProducts, getProductsById, getMyCart, updateCartProduct,deleteCartProduct,getSumPrice,createCartProduct };