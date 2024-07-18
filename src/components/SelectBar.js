import styled from "styled-components";

const SelectBar = () => {
  return (
    <Container>
      <SelectBarWrapper>
        <ShowCourse>
          <p>서울 추천 코스 보러 가기</p>
        </ShowCourse>
        <Random>
          <p>랜덤으로 지역 고르기</p>
        </Random>
      </SelectBarWrapper>
    </Container>
  );
};

export default SelectBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SelectBarWrapper = styled.div`
  width: 761px;
  height: 90px;
  border-radius: 40px;
  border: 1.2px solid #000;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 72px;
`;

const ShowCourse = styled.div`
  width: 442px;
  height: 58px;
  border-radius: 25px;
  border: 1px solid #000;
  background: #fceba5;
  margin-right: 28px;
  display: flex;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    font-family: "SUIT-Semibold";
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Random = styled.div`
  width: 243px;
  height: 58px;
  border-radius: 25px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    font-family: "SUIT-Semibold";
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
    background-color: #fceba5;
    transition-duration: 0.2s;
  }
`;
