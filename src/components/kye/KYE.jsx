import { Link } from "react-router-dom";
import Button from "../buttons/ArrowIconButton";
import ShareButton from "../buttons/ShareButton";
import Form from "../input/Form";
import InputField from "../input/InputField";
import InputTextArea from "../input/InputTextArea";

function KYE() {
  return (
    <Form>
      <InputField placeholder="이름을 입력하세요" />
      <InputTextArea placeholder="이름을 입력하세요" />
      <Button buttonStyle="fill">fill버튼</Button>
      <Button buttonStyle="fill" hasIcon>
        fill버튼 아이콘 O
      </Button>
      <Button buttonStyle="fill" disabled>
        fill버튼 disabled
      </Button>
      <Button buttonStyle="fill" hasIcon disabled>
        fill버튼 disabled 아이콘 O
      </Button>
      <Button buttonStyle="outline">outline버튼</Button>
      <Button buttonStyle="outline" hasIcon>
        outline버튼
      </Button>
      <Button buttonStyle="outline" disabled>
        outline버튼 disabled
      </Button>
      <Button buttonStyle="outline" disabled hasIcon>
        outline버튼 disabled 아이콘 O
      </Button>
      <ShareButton />
      <Link to="/main">메인페이지 가기</Link>
    </Form>
  );
}

export default KYE;
