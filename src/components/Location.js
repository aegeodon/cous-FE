import styled from "styled-components";
import location from "./../assets/Home/location.svg";

const Location = () => {
  return (
    <LocationWrapper>
      <Info>
        <img src={location} width={"32px"} height={"32px"} />
        <Text>광화문/경복궁</Text>
      </Info>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  display: inline-block;
  max-width: 100%;
  border-radius: 16px 16px 0px 0px;
  background: #000;
`;

const Info = styled.div`
  padding: 16px 23.2px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 8px;
  font-family: "SUIT-Semibold";
  font-size: 22px;
  color: white;
`;
