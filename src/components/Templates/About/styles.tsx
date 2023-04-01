import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: ${theme.color.lightMain};
  `,
  container: () =>
    css`
      display: flex;
      gap: ${spacing * 8}px;
      width: 1120px;
      height: 350px;
    `,
  textContainer: () => css``,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 8}px;
  `,
  description: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 8}px;
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    background-color: ${theme.color.main};
    color: ${theme.color.white};
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    border-radius: 50px;
  `,
  imageTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    text-align: center;
  `,
  imageTitleBottom: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    text-align: center;
    margin-bottom: ${spacing * 8}px;
  `,
})
