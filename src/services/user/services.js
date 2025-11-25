
import httpRequest from "../../utils/httpRequest";

export const getUser = async () => {
    
    const response = await httpRequest.get("/users");
    return response;
}