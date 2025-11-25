import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { getUser } from "./services";
import { actions, useUsers } from "../../features/user";

export const useFetchUsers = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    const users = useUsers();

    useEffect(() => {
        (async () => {
            const response = await getUser();
            dispatch(actions.setItems(response))
            setIsLoading(false);
        })()
    }, [dispatch]);
    return { isLoading, users }
}