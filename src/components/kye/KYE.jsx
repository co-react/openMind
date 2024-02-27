import Form from "../input/Form";
import InputField from "../input/InputField";
import InputTextArea from "../input/InputTextArea";

function KYE() {
  return (
    <Form>
      <InputField placeholder="이름을 입력하세요" />
      <InputTextArea placeholder="이름을 입력하세요" />
    </Form>
  );
}

export default KYE;
