import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KJS</div>
      <div className={styles.text}>
        KJS creative thoughts agency ⓒ All rights reserved.
      </div>
    </div>
  );
}
