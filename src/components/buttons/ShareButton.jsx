import { Toaster, toast } from 'sonner';
import styled from "styled-components";

import { shareToFacebook, shareToKakao } from "../../utils/shareToSns";

import { ReactComponent as FacebookLogo } from "../../assets/svg/icons/Facebook.svg";
import { ReactComponent as KakaoLogo } from "../../assets/svg/icons/Kakaotalk.svg";
import { ReactComponent as LinkLogo } from "../../assets/svg/icons/link.svg";

function LinkButton() {
  const handleClickToCopyUrl = (text) => {
    const $textarea = document.createElement("textarea");

    document.body.appendChild($textarea);

    $textarea.value = text;
    $textarea.select();

    document.execCommand("copy");
    document.body.removeChild($textarea);
  };

  const handleClickToShareFacebook = () => {
    shareToFacebook();
  }

  const handleClickToShareKakao = () => {
    shareToKakao();
  }

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
<<<<<<< HEAD
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
=======
        <Button 
          onClick={() => {
            toast.success('URL이 복사되었습니다', {
              cancel: {
                label: '취소',
                background: "black"
            }});
            handleClickToCopyUrl(window.location.href);
          }}
          color="var(--Brown-40)"
          >
>>>>>>> 96aa410494ee6d015e5db9ee286381bba2511045
          <LinkLogo fill="white" width={18} />
        </Button>
      </LinkItem>
      <LinkItem color="var(--Yellow-50)">
        <Button 
          onClick={handleClickToShareKakao}
          color="var(--Yellow-50)"
        >
          <KakaoLogo width={18} />
        </Button>
      </LinkItem>
      <LinkItem color="var(--Blue-50)">
        <Button 
          onClick={handleClickToShareFacebook}
          color="var(--Blue-50)"
        >
          <FacebookLogo fill="white" width={18} />
        </Button>
      </LinkItem>
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
<<<<<<< HEAD
  background-color: var(--Brown-40);
`;
=======
  background-color: ${props => props.color};
`
>>>>>>> 96aa410494ee6d015e5db9ee286381bba2511045

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
