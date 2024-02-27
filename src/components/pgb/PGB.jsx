import "./PGB.css";

//일단 다른 컴포넌트에서 해당 게시글에 대한 답변이 되었다면
//isAnswered를 true로 아니면 false로 전달하면 될것 같습니다.

function PGB({ isAnswered = true }) {
  return isAnswered ? (
    <button className="badgeAns">답변완료</button>
  ) : (
    <button className="badgeUnans">미답변</button>
  );
}

export default PGB;