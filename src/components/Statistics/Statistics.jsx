import PropTypes from 'prop-types';
import {
  StyledStatList,
  StyledTypeFeedback,
  StyledValue,
} from './Statistics.styled';
import { TypeStats } from '../../constants/constants';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StyledStatList>
      <li>
        <StyledTypeFeedback type={TypeStats.good}>
          Good : <StyledValue>{good}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.neutral}>
          Neutral : <StyledValue>{neutral}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.bad}>
          Bad : <StyledValue>{bad}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.total}>
          Total : <StyledValue>{total}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.percentage}>
          Positive feedback : <StyledValue>{positivePercentage}%</StyledValue>
        </StyledTypeFeedback>
      </li>
    </StyledStatList>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
