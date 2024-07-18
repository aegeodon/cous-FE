import { useState } from "react";
import styled from "styled-components";

const SelectBar = () => {
  const [selected, setSelected] = useState("showCourse");

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <Container>
      <SelectBarWrapper>
        <ShowCourse
          isSelected={selected === "showCourse"}
          onClick={() => handleSelect("showCourse")}
        >
          <p>서울 추천 코스 보러 가기</p>
        </ShowCourse>
        <Random
          isSelected={selected === "random"}
          onClick={() => handleSelect("random")}
        >
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
  width: 340px;
  height: 58px;
  border-radius: 25px;
  border: 1px solid #000;
  margin-right: 28px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#fceba5" : "#fff")};

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

const Random = styled.div`
  width: 340px;
  height: 58px;
  border-radius: 25px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "#fceba5" : "#fff")};
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
