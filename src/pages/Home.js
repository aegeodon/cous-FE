import styled from "styled-components";
import CourseItem from "../components/CourseItem";
import SelectBar from "../components/SelectBar";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <Title>코럼버스</Title>
        <SelectBar />
        <Div>
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </Div>
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
`;
