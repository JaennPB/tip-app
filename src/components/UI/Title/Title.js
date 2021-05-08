import Logo from '../../../assets/svg/TitleIcon.svg';

import styles from './Title.module.css';

const Title = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <h1 className={styles.title}>Tip App</h1>
    </div>
  );
};

export default Title;
