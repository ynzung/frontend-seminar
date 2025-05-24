import React from "react";
import lion2 from "../assets/lion2.jpg";
import * as S from "./styled";

const LionCard2 = () => {
  const isReal = true;
  return (
    <S.Card>
      <S.Img src={lion2} alt="사자2" />
      <h1>2번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </S.Card>
  );
};

export default LionCard2;
