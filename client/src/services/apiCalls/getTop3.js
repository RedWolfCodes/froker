import { blogEndpoints } from "../api";
import { apiConnector } from "../apiConnect";

const { GETTOP3BLOGS_API } = blogEndpoints;

export const getTop3 = async () => {
    try {
        const response = await apiConnector("GET", GETTOP3BLOGS_API);
        console.log("Data from getTOP3: ", response)

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