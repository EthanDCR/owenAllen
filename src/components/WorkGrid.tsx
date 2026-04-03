import styles from './WorkGrid.module.css'

interface WorkGridProps {
  a?: any
  b?: any
  c?: any
  d?: any
  e?: any
  f?: any
  rows?: string
}

export default function WorkGrid({ a, b, c, d, e, f, rows }: WorkGridProps) {
  return (
    <div className={styles.grid} style={rows ? { gridTemplateRows: rows } : undefined}>
      <div className={styles.a}>{a}</div>
      <div className={styles.b}>{b}</div>
      <div className={styles.c}>{c}</div>
      <div className={styles.d}>{d}</div>
      <div className={styles.e}>{e}</div>
      <div className={styles.f}>{f}</div>
    </div>
  )
}
