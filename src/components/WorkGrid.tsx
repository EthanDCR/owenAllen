import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './WorkGrid.module.css'
import newspaper from "../assets/Schattschneider_Newspaper_Project.png"
import konaHover from "../assets/lotties/KONA_HOVER.json"
import weShallOvercome from "../assets/We_ShallOvercome.pdf"

export default function WorkGrid() {
  return (
    <div className={styles.grid}>

      <div className={styles.a}>
        <iframe src={weShallOvercome} />
      </div>

      <div className={styles.b}>
        <DotLottieReact data={konaHover} loop autoplay />
      </div>

      <div className={styles.c}>
        <img src={newspaper} />
      </div>

      <div className={styles.d}>
      </div>

      <div className={styles.e}>
      </div>

    </div>
  )
}
