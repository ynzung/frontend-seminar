import React from "react";
import lion3 from "../assets/lion3.png";
import * as S from "./styled";

const LionCard3 = () => {
  const isReal = false;
  return (
    <S.Card>
      <S.Img src={lion3} alt="사자3" />
      <h1>3번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </S.Card>
  );
};

export default LionCard3;
