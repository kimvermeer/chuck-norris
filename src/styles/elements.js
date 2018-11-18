import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  background-color: orange;
  color: white;
  padding: 10px 25px;
`;

export const ButtonSecondary = styled(Button)`
  background-color: lightskyblue;
  float: right;
`;

export const Section = styled.section`
  width: 50%;
  box-sizing: border-box;
  padding: 50px;
  float: left;
`;
