import { apiConnector } from "../apiConnect";

export const getPostById = async (id) => {
    try {
        const response = await apiConnector("GET", `http://localhost:4000/api/v1/blogs/${id}`);
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