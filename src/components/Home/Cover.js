import styles from './Cover.module.css';

const Cover = () => {
  return (
    <div className={styles.container}>
      <img src="/images/coverphoto.jpg" alt="coverphoto" className={styles.coverphoto} />
      <div className={styles.subcontainer}>
        <img src="/images/logo.jpg" alt="logo" className={styles.logo} />
        <p className={styles.covertext}>The Icon</p>
      </div>
    </div>
  );
}

export default Cover;