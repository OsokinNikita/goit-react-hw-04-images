import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';
import { LoadSpan } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>
      <LoadSpan></LoadSpan>
      <LoadSpan></LoadSpan>
      <LoadSpan></LoadSpan>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
