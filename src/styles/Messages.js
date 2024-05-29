import styled from "styled-components";

export const Messages = styled.div`
  width: ${props => props.medium ? "50%" : "100%"};

  p{
    background-color: ${props => props.errors ? "rgb(218, 85, 85)" : "#28a745"};
    margin-top: 0px;
    padding: 10px;
    width: 95%;
    font-size: 14px;
    color: #000;
    border-radius: 20px;
  }
`;