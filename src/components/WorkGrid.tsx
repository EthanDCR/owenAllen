import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './WorkGrid.module.css'
import newspaper from "../assets/Schattschneider_Newspaper_Project.png"
import weShallOvercome from "../assets/weShallOverCome.png"
import konaHover from "../assets/lotties/konaNew.json"


export default function WorkGrid() {
  return (
    <div className={styles.grid}>

      <div className={styles.a}>
        <img src={weShallOvercome} />
      </div>

      <div className={styles.b}>
        <DotLottieReact data={konaHover} loop autoplay style={{ width: '100%', height: '100%' }} />
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
