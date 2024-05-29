import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondColor};
  margin: 10px;
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-shadow: none;
`;

const Button = ({ children, onClick, type }) => {
  return <StyledButton
      onClick={onClick}
      type={type}
    >
    {children}
  </StyledButton>
}

export default Button
