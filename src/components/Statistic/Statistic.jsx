import { List, Item, Total, PositiveFeedback } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
      </List>
      <Total>Total: {total}</Total>
      <PositiveFeedback>
        Positive feedback: {positivePercentage}%
      </PositiveFeedback>
    </>
  );
};
