import makeStyles from '@/styles/makeStyles'
import { css } from '@emotion/react'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    height: 40px;
    width: fit-content;
    background-color: ${theme.color.main};
    border: 1px solid ${theme.color.white};
  `,
  link: (theme) => css`
    display: inline-block;
    font-size: ${theme.typography.text.size.s};
  `,
})
