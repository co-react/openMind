import styled from "styled-components";
import Input from "./Input";
import person from "../../assets/svg/icons/person.svg";

const InputField = styled(Input)`
  background-image: url("${person}");
  background-position: 1.6rem 50%;
  background-repeat: no-repeat;
  background-size: 2rem;
  padding-left: 4rem;
`;

export default InputField;
