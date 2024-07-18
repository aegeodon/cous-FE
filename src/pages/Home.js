import styled from "styled-components";
import { useState } from "react";
import CourseItem from "../components/CourseItem";
import SelectBar from "../components/SelectBar";
import RandomComponent from "../components/RandomComponent";

const Home = () => {
  const [selected, setSelected] = useState("showCourse");

  return (
    <HomeWrapper>
      <HomeContainer>
        <Title>코럼버스</Title>
        <SelectBar selected={selected} setSelected={setSelected} />
        {selected === "showCourse" ? (
          <Div>
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </Div>
        ) : (
          <Div>
            <RandomComponent />
          </Div>
        )}
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const HomeContainer = styled.div`
  width: 1200px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: "HSSanTokki", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 72px;
  margin-bottom: 55px;
`;
const Div = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
