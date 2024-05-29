import styled from "styled-components"

const StyledInputField = styled.div`
  position: relative;
  margin: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
  width: 100%;
  height: 100%;
  background-color: #b3b3b3;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  padding: 10px 15px;
  &::placeholder {
    color: #000;
  }
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #000;
`;


const InputField = ({ type, name, placeholder, value, onChange, Icon }) => {
  return <StyledInputField>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      <StyledIcon>
        <Icon className="icon"/>
      </StyledIcon>
  </StyledInputField>
}

export default InputField
