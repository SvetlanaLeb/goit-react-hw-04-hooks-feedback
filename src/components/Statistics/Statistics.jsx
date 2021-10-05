import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul>
      <li>
        <p className={s.data}>Good: {good}</p>
      </li>
      <li>
        <p className={s.data}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={s.data}>Bad: {bad}</p>
      </li>
      <li>
        <p className={s.data}>Total: {total}</p>
      </li>
      <li>
        <p className={s.data}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  </div>
);

export default Statistics;
