import makeStyles from '@/styles/makeStyles'
import { css, Theme } from '@emotion/react'

const borderSize = 1
const innerStandard = 20
const outerStandard = 21

export const changeContainerColor = (isLast: boolean, theme: Theme) =>
  isLast
    ? css`
        color: ${theme.color.white};
        background-color: ${theme.color.main};
      `
    : css`
        color: ${theme.color.lightGray};
        background-color: ${theme.color.lightBlue};
      `

export const changeTriangleColor = (isLast: boolean, theme: Theme) =>
  isLast
    ? css`
        border-left: ${innerStandard * 0.7}px solid ${theme.color.main};
      `
    : css`
        border-left: ${innerStandard * 0.7}px solid ${theme.color.lightBlue};
      `

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    height: 40px;
    width: fit-content;
    border-top: ${borderSize}px solid ${theme.color.white};
    border-left: ${borderSize}px solid ${theme.color.white};
    border-bottom: ${borderSize}px solid ${theme.color.white};
    position: relative;
  `,
  link: (theme) => css`
    display: inline-block;
    font-size: ${theme.typography.text.size.s};
    color: inherit;
  `,
  innerTriangle: () => css`
    position: absolute;
    right: 0;
    z-index: 2;
    transform: translate(100%, 0);
    border-top: ${innerStandard - borderSize}px solid transparent;
    border-bottom: ${innerStandard - borderSize}px solid transparent;
  `,
  outerTriangle: () => css`
    position: absolute;
    right: 0;
    z-index: 2;
    transform: translate(106%, 0);
    border-top: ${outerStandard - borderSize * 1.5}px solid transparent;
    border-bottom: ${outerStandard - borderSize * 1.5}px solid transparent;
    border-left: ${outerStandard * 0.7}px solid white;
  `,
})
