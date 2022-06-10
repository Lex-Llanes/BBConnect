import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #954d34;
  height: 80px;
  display: flex important;
  justify-content: space-evenly;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  font-family: 'Oswald', sans-serif;;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  border-bottom: 1px solid #333;
  color: orangered;
  @media screen and (max-width: 390px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: left;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 390px) {
    display: none;
  }
`;