import styled from "styled-components";
import userImg from "./../assets/Home/user.svg";
import right from "./../assets/Home/right.svg";
import Tag from "./Tag";
import Location from "./Location";
import PlaceItem from "./PlaceItem";
import oneline from "./../assets/Home/oneline.svg";
import { useState } from "react";

const CourseItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Location />
      <CourseItemWrapper>
        <CourseItemBox>
          <InfoWrapper>
            <img src={userImg} width={"67px"} height={"67px"} />
            <InfoBox>
              <User>
                <Name>몽몽이</Name>
                <Date>2024.07.16</Date>
              </User>
              <Tag />
              <Tag />
              <RightBtn src={right} onClick={handleToggle} />
            </InfoBox>
          </InfoWrapper>
          <PlaceWrapper>
            <PlaceItem />
            <Right>
              <img src={right} width={"19px"} height={"19px"} />
            </Right>
            <PlaceItem />
            <Right>
              <img src={right} width={"19px"} height={"19px"} />
            </Right>
            <PlaceItem />
            <Right>
              <img src={right} width={"19px"} height={"19px"} />
            </Right>
            <PlaceItem />
          </PlaceWrapper>
        </CourseItemBox>
        {isOpen && (
          <OneLineBox>
            <OneLineTitle>
              <img src={oneline} />
              <span>코스 한줄소개</span>
            </OneLineTitle>
            <p>
              제가 남자친구랑 갔던 코스예요! 기념일 같이 특별한 날 추천드려요🤩
              특히 카페 강추합니다!!
            </p>
          </OneLineBox>
        )}
      </CourseItemWrapper>
    </Container>
  );
};

export default CourseItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 40px;
  }
`;

const CourseItemWrapper = styled.div`
  width: 858px;
  border: 1.5px solid #000;
`;

const CourseItemBox = styled.div`
  padding: 32px;
`;
const InfoWrapper = styled.div`
  height: 67px;
  display: flex;
  margin-bottom: 25px;
`;

const InfoBox = styled.div`
  width: 976px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  text-align: start;
  width: 100%;
`;

const User = styled.div`
  margin-right: 37px;
`;
const Name = styled.div`
  font-family: "SUIT-Semibold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Date = styled.div`
  color: #9d9d9d;
  font-family: "SUIT-SemiLight";
  font-size: 19px;
  line-height: normal;
`;

const RightBtn = styled.img`
  width: 22px;
  height: 38px;
  margin-left: auto;
`;

const PlaceWrapper = styled.div`
  width: 794px;
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  width: 38.4px;
  height: 38.4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OneLineBox = styled.div`
  width: 789px;
  margin-bottom: 25px;

  p {
    margin-top: 15px;
    font-family: "SUIT-Medium";
    font-size: 20px;
  }
`;

const OneLineTitle = styled.div`
  color: #9d9d9d;
  display: flex;
  font-family: "SUIT-Regular";
  font-size: 18px;
  padding: 0 32px;
  align-items: center;
`;
