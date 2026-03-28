import styles from "../app.module.css"
import { Link } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import owenAllenLogo from "../assets/OWENALLEN_LOGO.svg"
import cornerAnimation from "../assets/lotties/CIRCLE_ANIMATION_OPTIMIZED2.json"
import resumeIcon from "../assets/RESUME-ICON.svg"
import resumePdf from "../assets/owenSchattschneiderResume.pdf"

export default function Home() {
  return (
    <>
      <section className={styles.page1Container}>

        <ul className={styles.page1Links}>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className={styles.owenAllenLogo}>
          <img className={styles.owenAllenLogo} src={owenAllenLogo} alt="owenAllenLogo" />
        </div>

        <div className={styles.page1footer}>
          <a href={resumePdf} download>
            <img className={styles.resumeIcon} src={resumeIcon} alt="resume" />
          </a>
          <DotLottieReact className={styles.cornerAnimation} data={cornerAnimation} loop autoplay />
        </div>

      </section>

      <section className={styles.page2Container}>

      </section>
    </>
  )
}
