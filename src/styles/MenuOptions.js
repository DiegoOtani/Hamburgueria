import styled, { css } from "styled-components";

export const MenuOptions = styled.div`
  background-color: rgb(24, 23, 23);
  margin: ${props => props.maior ? "0px" : "0px 20px"};
  padding:${props => props.maior ? "0px" : "0px 20px"} ;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #b3b3b3;
    font-size: ${(props) => (props.maior ? '24px' : '26px')};
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 20px 10px;
    padding: ${(props) => (props.maior ? '10px' : '0px')};
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: ${(props) => (props.maior ? 'Verdana, Geneva, Tahoma, sans-serif' : "'Courier New', Courier, monospace")};
    font-size: 16px;
    font-weight: ${(props) => (props.maior ? '600' : '300')};
    color: #b3b3b3;
    text-decoration: none;
    text-align: center;
  }

  ${(props) =>
    props.maior &&  
    css`
      min-height: 380px;
      border-radius: 20px;

      .icon {
        font-size: 20px;
      }

      a:hover {
        cursor: auto;
      }
    `}
`;
