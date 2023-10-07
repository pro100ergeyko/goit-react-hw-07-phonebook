import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 16px;
`;

export const Btn = styled.button`
  padding: 4px;
  margin: 4px;
  border: none;
  color: #ff00bb;
  transition: all 0.4s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -3px -3px 3px #abf402, inset 3px 3px 3px #0359ef;
  }
`;
