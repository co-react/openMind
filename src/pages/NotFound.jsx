import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</h1>
      <p>뭘 넣을지 고민중.</p>
      <Link to="/">메인 페이지로 이동</Link>
      <button onClick={goBack}>이전 페이지로 돌아가기</button>
    </div>
  );
};

export default NotFound;
