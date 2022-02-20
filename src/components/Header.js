import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./../assets/images/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import { selectorCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [sideBarStatus, setSidebarStatus] = useState(false);
  const cars = useSelector(selectorCars);
  return (
    <Container>
      <a href="/">
        <img src={Logo} alt="TESLA" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>
            </li>
          ))}
      </Menu>
      <RightMenu>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <button onClick={() => setSidebarStatus(true)}>Menu</button>
        </li>
      </RightMenu>
      <SideNav show={sideBarStatus}>
        <CloseButtonContainer>
          <Button onClick={() => setSidebarStatus(false)}>
            <CloseIcon />
          </Button>
        </CloseButtonContainer>
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-In</a>
        </li>
        <li>
          <a href="/">Test Drive</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadster</a>
        </li>
        <li>
          <a href="/">Semi</a>
        </li>
        <li>
          <a href="/">Charging</a>
        </li>
        <li>
          <a href="/">PowerWall</a>
        </li>
        <li>
          <a href="/">Commercial Energy</a>
        </li>
        <li>
          <a href="/">Utilities</a>
        </li>
        <li>
          <a href="/">Find Us</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </SideNav>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 0 36px;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  flex: 1;
  @media (max-width: 1200px) {
    display: none;
  }

  a {
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    padding: 4px 8px;
  }
`;

const RightMenu = styled(Menu)`
  flex: 0;
  @media (max-width: 1200px) {
    display: flex;
  }
  button {
    background-color: transparent;
    font-size: 15px;
    font-weight: 500;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
  }
  li:not(:last-child) {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const SideNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 311px;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 32px 48px 32px;
  background-color: #fff;
  z-index: 100;
  transform: ${(props) => (props.show ? "translatex(0)" : "translatex(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    display: flex;
    align-items: left;
    justify-content: center;
    margin-bottom: 16px;
    width: 100%;
  }
  a {
    display: block;
    inline-size: 100%;
    padding: 4px 8px;
    text-align: left;
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export default Header;
