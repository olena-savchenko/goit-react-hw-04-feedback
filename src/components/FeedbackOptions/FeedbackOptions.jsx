import PropTypes from 'prop-types';
import { StyledBtnList } from './FeedbackOptions.styled';
import { StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledBtnList>
      {options.map(option => {
        return (
          <li key={option}>
            <StyledButton type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </StyledButton>
          </li>
        );
      })}
    </StyledBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
