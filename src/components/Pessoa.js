import styles from "./Pessoa.module.css";

function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} className={styles.pessoaImg} />
      <h2 className={styles.h2}> Nome: {nome}</h2>
      <p className={styles.p}> Idade: {idade}</p>
      <p className={styles.p}> Profissâo: {profissao}</p>
    </div>
  );
}

export default Pessoa;
