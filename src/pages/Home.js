import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    Home
    <BoldText>This is SUIT Bold</BoldText>
    <RegularText>This is SUIT Regular</RegularText>
    <LightText>This is SUIT Light</LightText>
    <SemiBoldText>This is SemiBoldText</SemiBoldText>
    </>
  )
}

export default Home;

const BoldText = styled.h1`
  font-family: 'SUIT', sans-serif;
  font-weight: 700;
`;

const RegularText = styled.p`
  font-family: 'SUIT', sans-serif;
  font-weight: 400;
`;

const LightText = styled.p`
  font-family: 'SUIT', sans-serif;
  font-weight: 300;
`;

const SemiBoldText = styled.p`
  font-family: 'SUIT', sans-serif;
  font-weight: 600;
`