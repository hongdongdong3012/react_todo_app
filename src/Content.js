import React from "react";
import styled from "styled-components"

const Content = () => {
  return <Container>content</Container>
};

const Container = styled.div`
  position:absolute;
  right:0;
  top:33px;
  width:500px;
  height: calc(100% - 33px);
  color: white;
`;

export default Content;