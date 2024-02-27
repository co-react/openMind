import "./FeedCard.css";
import "../badge/AnswerBtn";
import more from "../../assets/svg/icons/more.svg";
import like from "../../assets/svg/icons/thumbs-up.svg";
import hate from "../../assets/svg/icons/thumbs-down.svg";
import profile from "../../assets/png/profile1.png";
import AnswerBtn from "../badge/AnswerBtn";
import FeedCardQuestion from "./FeedCardQuestion";
import FeedCardAnswer from "./FeedCardAnswer";

function FeedCard({
  isAnswered = true,
  queDay = "2주전",
  queDes = "좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?",
  ansName = "아초는고양이",
  ansDay = "2주전",
  ansDes = "그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.",
}) {
  return (
    <div className="feedCard .box-shadow-1">
      <div className="feedTop">
        <AnswerBtn isAnswered={isAnswered} />
        <img src={more} alt="" />
      </div>
      <FeedCardQuestion queDay={queDay} queDes={queDes} />
      <FeedCardAnswer profile={profile} ansName={ansName} ansDay={ansDay} ansDes={ansDes} />
      <div className="feedFooter">
        <div className="feedFContainer">
          <div className="like">
            <img src={like} alt="" />
            좋아요
          </div>
          <div className="hate">
            <img src={hate} alt="" />
            싫어요
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
