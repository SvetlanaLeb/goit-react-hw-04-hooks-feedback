import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItems/StatisticsItems';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StatisticsItem tag="Good" value={good} />
      <StatisticsItem tag="Neutral" value={neutral} />
      <StatisticsItem tag="Bad" value={bad} />
      <StatisticsItem tag="Total" value={total} />
      <StatisticsItem
        tag="PositivePercentage"
        value={`${positivePercentage}%`}
      />
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
