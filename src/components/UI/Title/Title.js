import Logo from '../../../assets/svg/TitleIcon.svg';

import styles from './Title.module.css';

const Title = (props) => {
  return (
    <>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <h1 className={styles.title}>Tip App</h1>
    </>
  );
};

export default Title;
