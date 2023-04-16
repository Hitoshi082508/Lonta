import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    width: 340px;
    border-radius: 15px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    ${sp} {
      display: flex;
      height: 135px;
    }
  `,
  eyecatchContainer: () => css`
    position: relative;
    width: 340px;
    height: 180px;
    margin-bottom: ${spacing * 2}px;
    ${sp} {
      width: 130px;
      height: 135px;
    }
  `,
  eyecatch: () => css`
    border-radius: 15px;
  `,
  textContainer: () => css`
    padding: ${spacing * 4}px ${spacing * 3}px;
    ${sp} {
      width: 210px;
      padding: ${spacing * 2}px;
    }
  `,
  title: (theme) => css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 54px;
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 3}px;
    ${sp} {
      font-size: ${theme.typography.text.size.xs};
      height: 38px;
      margin-bottom: ${spacing * 1}px;
    }
  `,
  excerpt: (theme) => css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    min-height: 45px;
    color: ${theme.color.black};
    ${sp} {
      -webkit-line-clamp: 3;
      font-size: ${theme.typography.text.size.xxs};
      margin-bottom: ${spacing * 1}px;
    }
  `,
  categoryContainer: () => css`
    display: flex;
    gap: ${spacing * 2}px;
  `,
  category: (theme) => css`
    width: fit-content;
    font-size: ${theme.typography.text.size.xs};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    background-color: ${theme.color.main};
    border-radius: 20px;
    padding: ${spacing / 2}px ${spacing * 2}px;
    ${sp} {
      font-size: ${theme.typography.text.size.xxs};
    }
  `,
})
