import styled from "styled-components";

export const Aside = styled.div`
  width: 300px;
  position: fixed;
  top:0;
  left:0;
  height: 90%;
  background-color: red;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Main = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  height: 90%;
  right: 0;
  background-color:blue;
  transition: all 350ms;
`;