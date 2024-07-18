import KakaoLogin from "../components/KakaoLogin";
import styled from "styled-components";

const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const GrayDiv = styled.div`
  width: 1200px;
  height: 600px;
  margin: 150px 40px 80px;
  flex-shrink: 0;
  border-radius: 84px;
  padding: 10px;
  background: #f1f1f1;
`;

const StyleDiv = styled.div`
  p {
    color: #000;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  span {
    font-weight: 600;
  }
`;

const CourseButton = styled.button`
  display: inline-flex;
  padding: 21.5px 43.5px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: #000;
  p {
    color: white;
  }
`;

const StartPage = () => {
  return (
    <StartWrapper>
      <GrayDiv>
        <StyleDiv>
          <p>멀리 떠나야 할 것만 같은 여행</p>
          <p>
            일상 속 서울을 <span>새로운 여행의 공간으로</span>
          </p>
          <KakaoLogin />
        </StyleDiv>
      </GrayDiv>
      <CourseButton>
        <p className="logo">코럼버스</p>
        <p>추천받기</p>
      </CourseButton>
    </StartWrapper>
  );
};

export default StartPage;
