import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostLIst = ({isPosting, onStopPosting}) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuth, setEnteredAuth] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuth(event.target.value);
  };


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

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuth} body={enteredBody} />
        <Post author={enteredAuth} body={enteredBody} />
        <Post author={enteredAuth} body={enteredBody} />
        <Post author={enteredAuth} body={enteredBody} />
        <Post author={enteredAuth} body={enteredBody} />
      </ul>
    </>
  );
};

export default PostLIst;
