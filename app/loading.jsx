import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.text}>Carregando...</p>
    </div>
  )
}