import styled from "styled-components";
import { ReactComponent as KakaoLogo } from "../../assets/svg/icons/Kakaotalk.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svg/icons/Facebook.svg";
import { ReactComponent as LinkLogo } from "../../assets/svg/icons/link.svg";
import { Link } from "react-router-dom";

function LinkButton() {
  return (
    <LinkList>
      <Link to="/">
        <LinkItem color="var(--Brown-40)">
          <LinkLogo fill="white" width={18} />
        </LinkItem>
      </Link>
      <Link to="/">
        <LinkItem color="var(--Yellow-50)">
          <KakaoLogo width={18} />
        </LinkItem>
      </Link>
      <Link to="/">
        <LinkItem color="var(--Blue-50)">
          <FacebookLogo fill="white" width={18} />
        </LinkItem>
      </Link>
    </LinkList>
  );
}

export default LinkButton;

// map쓰는 방법
// const socialLinks = [
//   { icon: <LinkLogo fill="var(--Grayscale-10)" />, color: "var(--Brown-40)" },
//   { icon: <KakaoLogo />, color: "var(--Yellow-50)" },
//   { icon: <FacebookLogo fill="var(--Grayscale-10)" />, color: "var(--Blue-50)" },
// ];

// function LinkButton() {
//   return (
//     <LinkList>
//       {socialLinks.map((link, index) => (
//         <LinkItem key={index} color={link.color}>
//           {link.icon}
//         </LinkItem>
//       ))}
//     </LinkList>
//   );
// }

const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: ${props => props.color};

  & svg {
    width: 1.8rem;
  }
`;
