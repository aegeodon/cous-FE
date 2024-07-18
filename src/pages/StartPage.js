import KakaoLogin from "../components/KakaoLogin";
import styled from "styled-components";
import { useState } from "react";
import pinkImg from "../assets/StartPage/Group 5.svg";
import yellowImg from "../assets/StartPage/Group 4.svg";

const StartPage = () => {
  const NEW_TEXTS = [
    "바쁜 일상에서 벗어나고 싶지만",
    "멀리 가는 여행에",
    "부담감을 느낀다면?",
  ];

  const INITIAL_TEXTS = [
    "당신의 일상인 서울에서",
    "일탈을 간편하게 즐길 수 있도록",
    "코럼버스가 도와 줄게요!",
  ];

  const INITIAL_TEXTS2 = [
    "잠깐의 여유를 누리고 싶지만",
    "여행 코스를 생각하는 것이",
    "벌써부터 피곤하다면?",
  ];

  const NEW_TEXTS2 = [
    "잠시나마 얻게 된 여유를",
    "여행 계획 세우기에",
    "낭비하지 않도록 도와 줄게요!",
  ];

  const [texts, setTexts] = useState(INITIAL_TEXTS);
  const [isInitial, setIsInitial] = useState(true);

  const [texts2, setTexts2] = useState(INITIAL_TEXTS2);
  const [isInitial2, setIsInitial2] = useState(true);

  const handleOnclick = () => {
    setTexts(isInitial ? NEW_TEXTS : INITIAL_TEXTS);
    setIsInitial(!isInitial);
  };

  const handleOnclick2 = () => {
    setTexts2(isInitial2 ? NEW_TEXTS2 : INITIAL_TEXTS2);
    setIsInitial2(!isInitial2);
  };

  return (
    <StartWrapper>
      <GrayDiv>
        <StyleDiv>
          <p>멀리 떠나야 할 것만 같은 여행,</p>
          <p>일상 속 서울에서 색다른 ‘여행’을 찾아 드릴게요.</p>
        </StyleDiv>
        <ImgDiv>
          <div className="textImg" onClick={handleOnclick}>
            <span className="yellowText">CLICK ME!</span>
            {texts.map((text, index) => (
              <p className={`text${index + 1}`} key={index}>
                {text}
              </p>
            ))}
            <img src={yellowImg} />
          </div>
          <div className="textImg2" onClick={handleOnclick2}>
            <span className="pinkText">CLICK ME!</span>
            {texts2.map((text, index) => (
              <p className={`text${index + 1}`} key={index}>
                {text}
              </p>
            ))}
            <img src={pinkImg} />
          </div>
        </ImgDiv>
      </GrayDiv>
      <KakaoLogin />
    </StartWrapper>
  );
};

export default StartPage;

const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const GrayDiv = styled.div`
  position: absolute;
  width: 1200px;
  height: 580px;
  margin: 90px 40px 80px;
  flex-shrink: 0;
  border-radius: 84px;
  padding: 40px 20px 10px;
  background: #f1f1f1;
`;

const StyleDiv = styled.div`
  z-index: 1;
  margin-bottom: 55px;

  p {
    color: #000;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-family: "SUIT-Medium";
    font-weight: 500;
    line-height: normal;
  }

  span {
    font-weight: 600;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;

  .textImg {
    position: relative;
    width: 350px;
    margin-right: 120px;
  }

  .yellowText {
    position: absolute;
    top: 3%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: #d4c174;
    padding: 5px 10px;
  }

  .pinkText {
    position: absolute;
    top: 3%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: #dc83cc;
    padding: 5px 10px;
  }

  .textImg2 {
    position: relative;
    width: 350px;
  }

  p {
    position: absolute;
    width: 100%;
    font-family: "SUIT-Medium";

    font-size: 22px;
    text-align: left;
    left: 73%;
    transform: translateX(-50%);
  }

  .text1 {
    top: 60%; /* 텍스트의 Y 위치 설정 */
  }

  .text2 {
    top: 70%; /* 텍스트의 Y 위치 설정 */
  }

  .text3 {
    top: 80%; /* 텍스트의 Y 위치 설정 */
  }

  img {
    width: 350px;
    margin: 10px 30px;
  }
`;
