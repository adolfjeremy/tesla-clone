import React from "react";
import styled from "styled-components";
import DownArrowImage from "./../assets/images/down-arrow.svg";

function Section({
  title,
  description = "Order Online for Touchless Delivery",
  backgroundImage,
  leftButtonText = "Custom Order",
  RightButtonText = "Existing Inventory",
  isArrowButton = true,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton href={"/"}>{leftButtonText}</LeftButton>
          {RightButtonText && (
            <RightButton href={"/"}>{RightButtonText}</RightButton>
          )}
        </ButtonGroup>
        {isArrowButton && <DownArrow src={DownArrowImage} />}
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    padding: 6px 24px 16px;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  margin: 8px;
  height: 40px;
  width: 256px;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(23, 26, 32, 0.8);
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  opacity: 0.65;
  color: #393c41;
  background-color: #fff;
`;

const DownArrow = styled.img`
  margin-top: 12px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

export default Section;
