import styled from "styled-components";
import cafe from "./../assets/Home/cafe.png";

const PlaceItem = () => {
  return (
    <PlaceItemWrapper>
      <ImgBox>
        <Img src={cafe} />
      </ImgBox>
      <TextBox>카페 아리네</TextBox>
    </PlaceItemWrapper>
  );
};

export default PlaceItem;

const PlaceItemWrapper = styled.div`
  width: 160px;
  height: 208px;
  border: 1px solid black;
`;

const ImgBox = styled.div`
  width: 160px;
  height: 160px;
  border-bottom: 1px solid black;
  overflow: hidden;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  width: 160px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SUIT-Semibold";
  font-size: 19.2px;
`;
