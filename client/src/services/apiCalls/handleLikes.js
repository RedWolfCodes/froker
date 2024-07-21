import { apiConnector } from "../apiConnect";

export const addLike = async (id) => {
    try {
        const response = await apiConnector("POST", `http://localhost:4000/api/v1/blogs/${id}/like`);
        console.log("Data from addLike: ", response)

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        return {
            success: response?.data?.success,
            blogs: response?.data?.blogs,
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message || error.response.data.message,
        }
    }
}

export const deleteLike = async (id) => {
    try {
        const response = await apiConnector("DELETE", `http://localhost:4000/api/v1/blogs/${id}/like`);
        console.log("Data from deleteLike: ", response)

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        return {
            success: response?.data?.success,
            blogs: response?.data?.blogs,
        }
    }
    catch (error) {
        return {
            success: false,
            message: error.message || error.response.data.message,
        }
    }
}