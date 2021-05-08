import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.isTipButton && styles.tipButton} 
      ${props.isActionButton && styles.actionButton}`}
      type="button"
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
