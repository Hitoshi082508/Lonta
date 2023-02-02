import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  base: () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  container: () => css`
    width: 1120px;
    ${sp} {
      width: 345px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing * 2}px;
    margin-top: ${spacing * 14}px;
    margin-bottom: ${spacing * 20}px;
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
  `,
})
