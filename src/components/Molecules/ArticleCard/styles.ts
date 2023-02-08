import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  container: (theme) => css`
    width: 340px;
    height: 403px;
    box-shadow: ${theme.shadow.main};
    border-radius: 15px;
  `,
  contentsContainer: () => css`
    width: 340px;
    height: 230px;
    padding: ${spacing * 3}px ${spacing * 4}px;
  `,
  title: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `,
  excerpt: (theme) => css`
    min-height: 84px;
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.black};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin: ${spacing * 2}px 0;
  `,
  categoryContainer: () => css`
    display: flex;
    gap: ${spacing * 2}px;
  `,
})
