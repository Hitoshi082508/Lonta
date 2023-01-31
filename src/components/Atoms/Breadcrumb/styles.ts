import makeStyles from '@/styles/makeStyles'
import { css, Theme } from '@emotion/react'

const borderSize = 1
const innerStandard = 20
const outerStandard = 21

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

// 2番目以降の要素は、左側の余白を三角形の高さ分大きくする
export const changePadding = (isFirst: boolean) =>
  isFirst
    ? css`
        padding: 0 40px;
      `
    : css`
        padding: 0 40px 0 ${40 + innerStandard * 0.7}px;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    min-width: fit-content;
    border-top: ${borderSize}px solid ${theme.color.white};
    border-left: ${borderSize}px solid ${theme.color.white};
    border-bottom: ${borderSize}px solid ${theme.color.white};
  `,
  link: (theme) => css`
    display: inline-block;
    color: inherit;
    font-size: ${theme.typography.text.size.s};
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
