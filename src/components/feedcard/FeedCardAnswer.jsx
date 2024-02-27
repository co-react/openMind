import "./FeedCardAnswer.css";

function FeedCardAnswer({ profile, ansName, ansDay, ansDes }) {
  return (
    <div className="feedCardAns">
      <img src={profile} alt="" />
      <div className="feedAContainer">
        <div className="feedATop">
          <div className="feedAName">{ansName}</div>
          <div className="feedADay">{ansDay}</div>
        </div>
        <div className="feedADes">{ansDes}</div>
      </div>
    </div>
  );
}

export default FeedCardAnswer;
