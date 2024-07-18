import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    Home

    <p>This is 그냥</p>
    <RegularText>This is SUIT Regular</RegularText>
    <Title>코럼버스</Title>
    </>
  )
}

export default Home;


const RegularText = styled.p`
  font-family: 'SUIT-Regular', sans-serif;
  font-weight: 400;
`;
const Title = styled.h1`
  font-family: 'HSSanTokki', sans-serif;
  font-weight: 600;
`