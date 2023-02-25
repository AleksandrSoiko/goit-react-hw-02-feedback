import capitalize from 'lodash.capitalize';
import { Div, Btn } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map(button => {
        return (
          <Btn
            type="button"
            name={button}
            key={nanoid()}
            onClick={onLeaveFeedback}
          >
            {capitalize(button)}
          </Btn>
        );
      })}
    </Div>
  );
};
