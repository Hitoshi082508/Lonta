import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  `,
  container: () =>
    css`
      display: flex;
      width: 1120px;
      height: 300px;
    `,
  textContainer: () => css``,
  imageContainer: () => css``,
  title: () => css``,
  subTitle: () => css``,
  description: () => css``,
  button: () => css``,
  imageTitle: () => css``,
})
