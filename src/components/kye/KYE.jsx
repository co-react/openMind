import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/svg/guys.svg";
import CreateQuestionCard from "../../domain/CreateQuestionCard";
import Button from "../buttons/ArrowIconButton";
import ShareButton from "../buttons/ShareButton";
import SVG from "../common/IconMapping";
import Form from "../input/Form";
import InputField from "../input/InputField";
import InputTextArea from "../input/InputTextArea";

function KYE() {
  return (
    <>
      <Form>
        {<SVG.Next fill="red" />}
        <InputField placeholder="이름을 입력하세요" />
        <InputTextArea placeholder="이름을 입력하세요" />
        <Button variant="fill">fill버튼</Button>
        <Button variant="fill" hasIcon>
          fill버튼 아이콘 O
        </Button>
        <Button variant="fill" disabled>
          fill버튼 disabled
        </Button>
        <Button variant="fill" hasIcon disabled>
          fill버튼 disabled 아이콘 O
        </Button>
        <Button variant="outline">outline버튼</Button>
        <Button variant="outline" hasIcon>
          outline버튼
        </Button>
        <Button variant="outline" disabled>
          outline버튼 disabled
        </Button>
        <Button variant="outline" disabled hasIcon>
          outline버튼 disabled 아이콘 O
        </Button>
        <ShareButton />
        <Link to="/main">메인페이지 가기</Link>
      </Form>
      <Back />

      <CreateQuestionCard />
    </>
  );
}

export default KYE;
