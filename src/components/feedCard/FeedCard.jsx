import styled from "styled-components";
import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardQuestion from "./FeedCardQuestion";
import profileImage from "../../assets/png/profile1.png";
import moreIcon from "../../assets/svg/icons/more.svg";
import AnswerButton from "../badge/AnswerButton";
import Hate from "../reactions/Hate";
import Like from "../reactions/Like";

function FeedCard({
  isAnswered = true,
  queDate = "2주전",
  queDesc = "좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?",
  ansName = "아초는고양이",
  ansDate = "2주전",
  state = "Sent",
  ansDesc = "그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.",
}) {
  return (
    <FeedCardContainer>
      <CardTopContainer>
        <AnswerButton isAnswered={isAnswered} />
        <img src={moreIcon} alt="" />
      </CardTopContainer>
      <FeedCardQuestion queDate={queDate} queDesc={queDesc} />
      <FeedCardAnswer
        profile={profileImage}
        ansName={ansName}
        ansDate={ansDate}
        ansDesc={ansDesc}
        state={state}
      />
      <CardFooter>
        <CardFooterContainer>
          <Like />
          <Hate />
        </CardFooterContainer>
      </CardFooter>
    </FeedCardContainer>
  );
}

export default FeedCard;

const FeedCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  border-radius: 1.6rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  @media (min-width: 768px) {
    width: 68.4rem;
    padding: 3.2rem
    gap: 3.2rem;
  }
`;

const CardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CardFooter = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  border-top: 1px solid var(--Grayscale-30);
`;

const CardFooterContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;
