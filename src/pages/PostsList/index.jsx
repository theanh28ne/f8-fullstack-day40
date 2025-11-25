import Loading from "../../component/Loading";
import { useFetchPosts } from "../../services/post";

const PostsList = () => {
  const { isLoading, posts } = useFetchPosts();

  return (
    <div className="m-5">
      <h1>Post</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-0.5">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                {post.id}. {post.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default PostsList;
