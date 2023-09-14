import styled from "styled-components";

export const StyledLink = styled.a`
  background-color: ${(bColor) => bColor.bgColor};
  color: ${(tColor) => tColor.textColor};

  display: inline-block;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  opacity: 1;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
