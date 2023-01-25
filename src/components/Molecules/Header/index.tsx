import { styles } from './styles'
import { MdPeople } from 'react-icons/md'
import Link from 'next/link'
import Hamburger from '@/components/Atoms/Hamburger'
import NextImage from '@/components/Atoms/NextImage'
import LontaLogo from '../../../../assets/images/header-logo.jpg'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  const router = useRouter()
  const goToTop = () => {
    router.push('/')
  }
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
          cursor
          onClick={goToTop}
        />
        {mounted && isMobile && <Hamburger />}
        {mounted && !isMobile && (
          <ul css={styles.navContainer}>
            <li>
              <Link href="" css={styles.nav}>
                Lontaについて
              </Link>
            </li>
            <li>
              <Link href="/#job" css={styles.nav}>
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
                <Link
                  href="https://lin.ee/E8cn3aY"
                  target="_blank"
                  css={styles.contact}
                  rel="noreferrer"
                >
                  <MdPeople size={30} color="white" />
                  個人面談に申し込む
                </Link>
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
