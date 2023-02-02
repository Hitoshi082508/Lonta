import React from 'react'
import { styles } from './styles'

type ButtonProps = {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button css={styles.container}>{text}</button>
}
export default Button
