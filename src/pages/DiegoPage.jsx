import TopBar from "../components/TopBar";
import "../styles/normalize.css";
import "../styles/Page.css";
import "../styles/DiegoPage.css";
import { ReactMatrixAnimation } from "react-matrix-animation";
import { useEffect, useState } from "react";
import the_monkey from "/gilgamesh_monkey.jpg";

const DiegoPage = () => {
  const [activity, setActivity] = useState();
  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
  }, []);
  return (
    <>
      <TopBar />

      <div className="matrix">
        <ReactMatrixAnimation />
        <h1 className="header">HOW TO LOCK THE F*** IN!!!!!!!!!!</h1>
      </div>

      <div className="container">
        <p>We posted up in Gilgamesh Times HQ!!! *weed smoking emoji*</p>
        <p>
          In just 10 short steps to completely locking in through midterm season
          and finals.
        </p>
        <ol>
          <li className="lister">
            <strong>Be inspirational:</strong> If Daddy Denero isn't amazed at
            your grindset, I don't want to hear it
          </li>
          <li className="lister">
            <strong>Be Gilgamesh:</strong> Only big Gilgamesh energy can truly
            lock in
          </li>
          <li className="lister">
            <strong>Be Gilgamesh again:</strong> Do it again.
          </li>
          <li className="lister">
            <strong>Get rid of all distractions:</strong> Don't waist precious
            time on stupid things like "visiting your loved ones" or "having
            fun"
          </li>
          <li className="lister">
            <strong>Think about gilgamesh's legacy:</strong> And how it affects
            you
          </li>
          <li className="lister">
            <strong>
              Imagine what you would say to gilgamesh if you could meet him:
            </strong>{" "}
            Do you think he would like me? lol
          </li>
          <li className="lister">
            <strong>Trent, do so much trent:</strong> 'nuff said
          </li>
          <li className="lister">
            <strong>Gilgamesh:</strong> gilgamesh gilgamesh gilgamesh gilgamesh
            gilgamesh gilgamesh gilgamesh gilgamesh gilgamesh ğ̷̡̘̗̼͕̤͗͆̔ỉ̶̼͔̻̠̟̙̘̈́͋͗l̷̬̲̱͈̲̄͆̉͌̕g̷͔͇͍̝̠̪̳̃̂̈́͑á̵̞̰̙̦͐̈́m̶͍͑͂́͋̊͝e̵͉͚͍̿̒͑̆̉͘s̸̨̮̄́͛͜͝͝h̸̼̩̣͠
          </li>
          <li className="lister">
            <strong>Pilgramage to Mecca:</strong> mashallah
          </li>
          <li className="lister">
            <strong>Get Raw:</strong> so unbelievably raw
          </li>
        </ol>

        <h3>Gilgamesh activity to be absolutely blessed up: {activity}</h3>

        <div className="author-article-container">
          <div className="author-info">
            <img src={the_monkey} alt="" />
            <p>Written by: d.p.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiegoPage;
