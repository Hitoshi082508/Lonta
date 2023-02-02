import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'

export const styles = makeStyles({
  container: (theme) => css`
    width: 280px;
    height: 50px;
    background-color: ${theme.color.main};
    color: ${theme.color.white};
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    border-radius: 50px;
  `,
})
