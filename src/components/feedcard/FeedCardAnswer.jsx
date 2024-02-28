import "./FeedCardAnswer.css";
import InputTextArea from "../input/InputTextArea";
import Button from "../buttons/Button";

function FeedCardAnswer({ profile, ansName, ansDate, ansDesc, state }) {
  return (
    <div className="cardAnswer">
      <img src={profile} alt="" />
      <div className="answerContainer">
        <div className="answerTop">
          <div className="answerName">{ansName}</div>
          <div className="answerDate">{ansDate}</div>
        </div>
        {state === "Empty" ? (
          <>
            <InputTextArea placeholder="답변을 입력해주세요" />
            <Button color="brown" disabled>
              답변완료
            </Button>
          </>
        ) : state === "Sent" ? (
          <div className="answerDescription">{ansDesc}</div>
        ) : state === "Resection" ? (
          <div className="answerResection">답변 거절</div>
        ) : null}
      </div>
    </div>
  );
}

export default FeedCardAnswer;
