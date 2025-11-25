import { useSelector } from "react-redux";

export const usePosts = () => {
    const posts = useSelector((state) => state.post.posts);
    return posts;
}