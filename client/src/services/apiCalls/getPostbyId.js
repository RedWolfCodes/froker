import { apiConnector } from "../apiConnect";
import { BASE_URL } from "../api";

export const getPostById = async (id) => {
    try {
        const response = await apiConnector("GET", `${BASE_URL}/blogs/${id}`);
        console.log("Data from getPostByid: ", response)

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        return {
            success: response?.data?.success,
            blogs: response?.data?.blog,
        }
    } catch (error) {
        return {
            success: false,
            message: error.message || error.response.data.message,
        }
    }
}