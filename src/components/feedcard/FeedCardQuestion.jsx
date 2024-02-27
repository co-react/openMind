import "./FeedCardQuestion.css";

function FeedCardQuestion({ queDay, queDes }) {
  return (
    <div className="feedQuestion">
      <div className="feedQTitle">질문 · {queDay}</div>
      <div className="feedQDes">{queDes}</div>
    </div>
  );
}

export default FeedCardQuestion;
