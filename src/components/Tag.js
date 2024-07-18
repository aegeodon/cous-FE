import styled from "styled-components";

const Tag = () => {
  return (
    <TagWrapper>
      <p>#특별한</p>
    </TagWrapper>
  );
};

export default Tag;

const TagWrapper = styled.div`
  width: 92px;
  height: 38px;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #000;

  background: #cfff25;
  p {
    padding: 8px 16px;
    color: #000;
    font-family: "SUIT-Regular";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & + & {
    margin-left: 12.8px;
  }
`;
