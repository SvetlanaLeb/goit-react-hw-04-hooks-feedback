import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
