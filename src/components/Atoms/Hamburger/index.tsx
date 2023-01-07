import Link from 'next/link'
import { useState } from 'react'
import { MdPeople } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { styles } from './styles'

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div css={styles.container}>
      <GiHamburgerMenu
        size={30}
        css={styles.icon}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
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
            <button css={styles.buttonContainer}>
              <Link href="" css={styles.button}>
                <MdPeople size={25} color="white" />
                個人面談に申し込む
              </Link>
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Hamburger
