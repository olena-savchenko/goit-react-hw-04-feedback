import styled from 'styled-components';
import { TypeStats } from '../../constants/constants';

export const StyledStatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  font-size: 12px;
`;

export const StyledTypeFeedback = styled.p`
  color: ${({ type }) => {
    switch (type) {
      case TypeStats.good:
        return '#4aa879';
      case TypeStats.neutral:
        return '#8f9290';
      case TypeStats.bad:
        return '#c73535';
      case TypeStats.total:
        return '#8f9290';
      case TypeStats.percentage:
        return '#4aa879';
      default:
        return 'black';
    }
  }};
`;

export const StyledValue = styled.span`
  font-weight: 700;
`;
