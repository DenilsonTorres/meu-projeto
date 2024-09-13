import styles from "./SayMyName.module.css";

function SayMyName(props) {
  return (
    <div className={styles.saymynameContainer}>
      <p className={styles.saymynameContent}>Fala aí {props.nome}, suave?</p>
    </div>
  );
}

export default SayMyName;
