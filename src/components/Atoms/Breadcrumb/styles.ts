import makeStyles from '@/styles/makeStyles'
import { css, Theme } from '@emotion/react'

export const changeColor = (isLast: boolean, theme: Theme) =>
  isLast
    ? css`
        color: ${theme.color.white};
        background-color: ${theme.color.main};
      `
    : css`
        color: ${theme.color.lightGray};
        background-color: ${theme.color.lightBlue};
      `

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    height: 40px;
    width: fit-content;
    border: 1px solid ${theme.color.white};
  `,
  link: (theme) => css`
    display: inline-block;
    font-size: ${theme.typography.text.size.s};
    color: inherit;
  `,
})
