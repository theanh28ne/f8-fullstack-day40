
import httpRequest from "../../utils/httpRequest";

export const getPost = async () => {
    const response = await httpRequest.get("/posts");
    return response;
}