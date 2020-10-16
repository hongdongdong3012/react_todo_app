import React from "react";
import styled from "styled-components";

const TodoRow = ({ index, todo, handleClickRemove }) => (
  <Container>
    <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
  </Container>
);

const Container = styled.div`
  margin: 13px 0;
  width:80%;
  text-align:left;
`;

const Text = styled.div`
  display:inline-block;
  cursor:pointer;
  font-size:32px;
  &:hover {
    opacity: .4s;
  }
`;

export default TodoRow;