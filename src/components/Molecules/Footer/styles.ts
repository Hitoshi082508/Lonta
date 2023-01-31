import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 160px;
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    ${sp} {
      height: 310px;
    }
  `,
  container: () => css`
    display: flex;
    justify-content: space-between;
    width: 1120px;
    ${sp} {
      width: 100%;
      flex-direction: column;
      padding: 0 ${spacing * 3}px;
    }
  `,
  logoContainer: () => css`
    display: flex;
    flex-direction: column;
  `,
  logoTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
  `,
  logoSubTitle: (theme) => css`
    font-size: ${theme.typography.text.size.xs};
  `,
  navContainer: (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    list-style: none;
    ${sp} {
      flex-direction: column;
      font-size: ${theme.typography.text.size.s};
      padding-left: 0;
    }
  `,
  textContainer: () => css`
    display: flex;
    gap: ${spacing * 6}px;
    margin-right: ${spacing * 6}px;
    ${sp} {
      width: 345px;
      justify-content: space-between;
      margin-right: 0;
      gap: 0px;
      margin: ${spacing * 5}px 0;
    }
  `,
  nav: (theme) => css`
    color: ${theme.color.white};
    border-bottom: 1px solid ${theme.color.white};
    :visited {
      color: ${theme.color.white};
    }
  `,
  contact: (theme) => css`
    display: flex;
    align-items: center;
    height: 45px;
    background-color: ${theme.color.main};
    border-radius: 35px;
    color: ${theme.color.white};
    gap: ${spacing}px;
    padding: 0 ${spacing * 3}px;
    :visited {
      color: ${theme.color.white};
    }
    ${sp} {
      margin-bottom: ${spacing * 5}px;
    }
  `,
  copyRight: (theme) => css`
    font-size: ${theme.typography.text.size.s};
  `,
})
