import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import styled from "styled-components";

import { ReactComponent as FacebookLogo } from "../../assets/svg/icons/Facebook.svg";
import { ReactComponent as KakaoLogo } from "../../assets/svg/icons/Kakaotalk.svg";
import { ReactComponent as LinkLogo } from "../../assets/svg/icons/link.svg";

function LinkButton() {
  const handleClick = (text) => {
    const $textarea = document.createElement("textarea");

    document.body.appendChild($textarea);

    $textarea.value = text;
    $textarea.select();

    document.execCommand("copy");
    document.body.removeChild($textarea);
  };

  return (
    <LinkList>
      <LinkItem color="var(--Brown-40)">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "var(--Brown-10, #f5f1ee)",
              color: "var(--Brown-40, #542f1a)",
            },
            className: "class",
          }}
        />
        <Button
          onClick={() => {
            toast.success("URL이 복사되었습니다", {
              cancel: {
                label: "취소",
                background: "black",
              },
            });
            handleClick(window.location.href);
          }}
        >
          <LinkLogo fill="white" width={18} />
        </Button>
      </LinkItem>
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

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: var(--Brown-40);
`;

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
  background-color: ${(props) => props.color};

  & svg {
    width: 1.8rem;
  }
`;
