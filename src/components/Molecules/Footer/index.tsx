import { styles } from './styles'
import { MdPeople } from 'react-icons/md'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer css={styles.base}>
      <div css={styles.container}>
        <div css={styles.logoContainer}>
          <div css={styles.logoTitle}>LOGO</div>
          <div css={styles.logoSubTitle}>サービスキャッチコピー</div>
        </div>
        <ul css={styles.navContainer}>
          <div css={styles.textContainer}>
            <li>
              <Link href="" css={styles.nav}>
                〇〇について
              </Link>
            </li>
            <li>
              <Link href="" css={styles.nav}>
                職種から探す
              </Link>
            </li>
            <li>
              <Link href="" css={styles.nav}>
                適正診断してみる
              </Link>
            </li>
          </div>
          <li>
            <button>
              <Link href="" css={styles.contact}>
                <MdPeople size={30} color="white" />
                個人面談に申し込む
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div css={styles.copyRight}>
        Copyright ©️ 2022 ◯◯ All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
