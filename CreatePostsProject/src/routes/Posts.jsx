import { Outlet } from "react-router-dom";
import PostLIst from "../components/PostLIst";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostLIst />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
