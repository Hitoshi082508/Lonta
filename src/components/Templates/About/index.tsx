import { styles } from './styles'
import NextImage from '@/components/Atoms/NextImage'
import PeopleImagePath from '../../../../assets/images/about-people.png'
import AboutIconPath from '../../../../assets/images/about-icon.png'

const About: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.textContainer}>
          <NextImage
            src={AboutIconPath}
            width={19}
            height={28}
            alt="Aboutのアイコン"
          />
          <h2 css={styles.title}>About</h2>
          <p css={styles.subTitle}>Lontaとは</p>
          <div css={styles.description}>
            大学生の皆さん、長期・有給インターンシップにチャレンジしてみませんか？
            <br />
            Lontaは、長期インターンを実際に経験した学生が作った、長期インターンやキャリア構築に関する情報提供を行うメディアです。詳しい職種説明や厳選したインターンの紹介、ここでしか見ることができないコラムなど、長期インターンへの挑戦を充実の機能でサポートします！
          </div>
          <button css={styles.button}>Lontaについて詳しく知る</button>
        </div>
        <div>
          <p css={styles.imageTitle}>長期インターンに関するお悩みは</p>
          <p css={styles.imageTitleBottom}>Lontaで解決！</p>
          <NextImage
            src={PeopleImagePath}
            width={487}
            height={241}
            alt="おすすめする人々"
          />
        </div>
      </div>
    </div>
  )
}

export default About
