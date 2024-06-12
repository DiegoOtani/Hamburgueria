import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLoginLink = styled(Link)`
  margin: 0px;
  padding: 0px 10px;
  background-color: #b3b3b3;
  color: #000;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  width: 100px;
  height: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2b2929;
    color: #fff;
  }
`;

const LoginLink = ({text, to}) => {
  return <StyledLoginLink to={to}>
    {text}
  </StyledLoginLink>
}

export default LoginLink;