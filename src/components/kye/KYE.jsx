import BaseButton from "../buttons/Button";
import FloatingButton from "../buttons/FloatingButton";
import Form from "../input/Form";
import InputField from "../input/InputField";
import InputTextArea from "../input/InputTextArea";
import { ReactComponent as NextArrow } from "../../assets/svg/icons/next.svg";
import ShareButton from "../buttons/ShareButton";

function KYE() {
  return (
    <>
      <Form>
        <InputField placeholder="이름을 입력하세요" />
        <InputTextArea placeholder="이름을 입력하세요" />
        <BaseButton color="brown" disabled="true">
          브라운버튼
          <NextArrow fill="#fff" />
        </BaseButton>
        <BaseButton>
          베이지버튼
          <NextArrow fill="var(--Brown-40)" />
        </BaseButton>
        <ShareButton />
      </Form>
      <FloatingButton />
    </>
  );
}

export default KYE;
