import { styles } from './styles'
import { MdPeople } from 'react-icons/md'
import Link from 'next/link'
import NextImage from '@/components/Atoms/NextImage'
import LontaLogo from '../../../../assets/images/footer-logo.png'

const Footer: React.FC = () => {
  return (
    <footer css={styles.base}>
      <div css={styles.container}>
        <NextImage
          src={LontaLogo}
          width={180}
          height={50}
          spWidth={140}
          spHeight={40}
          alt="Lontaのロゴ"
        />
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
