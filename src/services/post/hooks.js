import { useDispatch } from "react-redux";
import { actions, usePosts } from "../../features/post";
import { useEffect, useState } from "react";
import { getPost } from "./services";

export const useFetchPosts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    const posts = usePosts();

    useEffect(() => {
        (async () => {
            const response = await getPost();
            dispatch(actions.setItems(response))
            setIsLoading(false);
        })()
    }, [dispatch]);
    return { isLoading, posts }
}