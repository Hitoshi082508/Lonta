import { styles } from './styles'
import { MdPeople } from 'react-icons/md'
import Link from 'next/link'
import Hamburger from '@/components/Atoms/Hamburger'
import NextImage from '@/components/Atoms/NextImage'
import LontaLogo from '../../../../assets/images/logo.jpg'

const Header: React.FC = () => {
  return (
    <header css={styles.base}>
      <div css={styles.container}>
        <NextImage
          src={LontaLogo}
          width={180}
          height={50}
          spWidth={140}
          spHeight={40}
          alt="Lontaのロゴ"
        />
        <Hamburger />
        <ul css={styles.navContainer}>
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
    </header>
  )
}

export default Header
