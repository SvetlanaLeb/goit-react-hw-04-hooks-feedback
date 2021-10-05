import PropTypes from 'prop-types';
import s from './StatisticsItems.module.css';

const StatisticsItem = ({ tag, value }) => {
  return (
    <>
      <li>
        <p className={s.data}>
          {tag}: {value}
        </p>
      </li>
    </>
  );
};

StatisticsItem.propTypes = {
  tag: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default StatisticsItem;
