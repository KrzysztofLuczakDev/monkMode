import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostLIst = () => {
  // * three options to paste modal considering variable / state
  // ! First
  /*{modalIsVisible ? (
  <Modal onClose={hideModalHandler}>
    <NewPost
      onBodyChange={bodyChangeHandler}
      onAuthorChange={authorChangeHandler}
    />
  </Modal>
) : (
  false
)}
*/
  // ! Second
  /*{modalIsVisible && (
  <Modal onClose={hideModalHandler}>
    <NewPost
      onBodyChange={bodyChangeHandler}
      onAuthorChange={authorChangeHandler}
    />
  </Modal>
)}
*/
  // ! Third
  /*let modalContent;

if (modalIsVisible){
  modalContent = (
    <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
  )
}

{modalContent}
*/

  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostLIst;
