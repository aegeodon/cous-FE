import styled from "styled-components";
import random1 from "./../assets/Home/random1.svg";
import randomBtn from "./../assets/Home/randomBtn.svg";
const RandomComponent = () => {
  return (
    <Div>
      <img src={random1} width={"632px"} />
      <Img>
        <img src={randomBtn} width={"190px"} />
      </Img>
    </Div>
  );
};

export default RandomComponent;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
