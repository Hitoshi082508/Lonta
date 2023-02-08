import React from 'react'
import { styles } from './styles'

type ButtonProps = {
  text: string
  as: React.ElementType
}

const Button: React.FC<ButtonProps> = ({ as: CustomTag, text }) => {
  return <CustomTag css={styles.container}>{text}</CustomTag>
}
export default Button
