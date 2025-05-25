import React from "react";
import lion1 from "../assets/lion1.jpg";
import * as S from "./styled";

const LionCard1 = () => {
  const isReal = true;
  return (
    <S.Card>
      <S.Img src={lion1} alt="사자1" />
      <h1>1번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </S.Card>
  );
};

export default LionCard1;
