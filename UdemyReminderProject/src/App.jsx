import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostLIst from "./components/PostLIst";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostLIst isPosting={modalIsVisible} onStopPosting={hideModalHandler} />;
    </>
  );
}

export default App;
