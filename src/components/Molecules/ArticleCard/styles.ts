import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    width: 340px;
    border-radius: 15px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  `,
  eyecatchContainer: () => css`
    position: relative;
    width: 340px;
    height: 180px;
    margin-bottom: ${spacing * 2}px;
  `,
  eyecatch: () => css`
    border-radius: 15px;
  `,
  textContainer: () => css`
    padding: ${spacing * 4}px ${spacing * 2}px;
  `,
  title: (theme) => css`
    height: 54px;
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 3}px;
  `,
  excerpt: (theme) => css`
    color: ${theme.color.black};
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
  `,
})
