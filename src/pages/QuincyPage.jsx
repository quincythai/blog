import TopBar from "../components/TopBar";
import Parallax from "../components/Parallax";
import backgroundImage from "/thanos.jpg";
import Article from "../components/Article";
import "../styles/normalize.css";
import "../styles/Page.css";

const QuincyPage = () => {
  return (
    <>
      <TopBar />
      <Parallax
        title="My Fella, Do You Want To Know the Method...?"
        image={backgroundImage}
      />
      <Article />
    </>
  );
};

export default QuincyPage;
