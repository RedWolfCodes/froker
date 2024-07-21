import { blogEndpoints } from "../api";
import { apiConnector } from "../apiConnect";

const { GETPOSTS_API } = blogEndpoints;

export const getPosts = async () => {
    try {
        const response = await apiConnector("GET", GETPOSTS_API);
        console.log("Data from getPosts: ", response)

        if(!response?.data?.success) {
            throw new Error(response?.data?.message);
        }

        return {
            success: response?.data?.success,
            blogs: response?.data?.blogs,
        }
    } catch (error) {
        return {
            success: false,
            message: error.message || error.response.data.message,
        }
    }
}