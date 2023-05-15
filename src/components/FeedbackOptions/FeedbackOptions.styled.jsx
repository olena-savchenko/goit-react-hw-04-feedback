import styled from 'styled-components';

export const StyledBtnList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  color: #707379;
  text-transform: uppercase;
  padding: 5px 20px;
  font-size: 12px;
  border-radius: 4px;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;
