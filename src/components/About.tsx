import styles from './About.module.css'
import owenPortrait from '../assets/owenPortrait.png'
import clouds from "../assets/Clouds.svg"
import linkedinSVG from "../assets/socialSVGs/LINKDIN_ICON.svg"
import beehanceSVG from "../assets/socialSVGs/BEHANCE_ICON.svg"
import mailSVG from "../assets/socialSVGs/EMAIL_ICON.svg"
import { useState } from 'react'


export default function About() {
  const [highLightMail, setHighLightMail] = useState<boolean>(false)

  const lightMail = () => {
    setHighLightMail(true)
    setTimeout(() => {
      setHighLightMail(false)
    }, 3000)
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.header}>about</h1>


      <div className={styles.tvWrapper}>
        <div className={styles.tvOuter}>
          <div className={styles.tvInner}>
            <h1> I turn ideas into visuals that hit.</h1>
            <p>I’m Owen Allen Schattschneider, a multi-medium visual communicator working across design and video.
              I use digital tools to build sharp, intentional work—and I’m looking for an internship to take it further.</p>
          </div>
        </div>

        <div className={styles.tvDots}>

          <a href='https://www.linkedin.com/in/owen-schattschneider-9bb990123'>
            <div className={styles.socialLink}><img src={linkedinSVG} /></div>
          </a>

          <a href='https://www.behance.net/owenschatts'>
            <div className={styles.socialLink}><img src={beehanceSVG} /></div>
          </a>

          <div onClick={() => {
            lightMail()
          }} className={styles.socialLink}><img src={mailSVG} /></div>

        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>
          <span className={styles.contactLabel}>contact</span>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>

          {highLightMail ?
            <span style={{ color: "blue" }} className={styles.contactEmail}>owenschatt@gmail.com</span>
            :
            <span className={styles.contactEmail}>owenschatt@gmail.com</span>
          }

        </div>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>
          <span className={styles.contactPhone}>262-354-5473</span>
        </div>
      </div>

      <img src={clouds} className={styles.clouds} alt="" />
      <img src={owenPortrait} className={styles.portrait} alt="Owen" />
    </div>
  )
}
