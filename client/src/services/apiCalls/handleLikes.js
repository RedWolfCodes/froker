import { apiConnector } from "../apiConnect";
import { BASE_URL } from "../api";
export const addLike = async (id) => {
    try {
        const response = await apiConnector("POST", `${BASE_URL}/api/v1/blogs/${id}/like`);
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
        const response = await apiConnector("DELETE", `${BASE_URL}/api/v1/blogs/${id}/like`);
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