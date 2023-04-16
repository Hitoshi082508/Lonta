import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  title: () => css`
    display: flex;
    align-items: center;
    gap: ${spacing * 1}px;
    margin-top: ${spacing * 5}px;
  `,
  container: () => css`
    display: flex;
    justify-content: center;
    width: 1120px;
    flex-wrap: wrap;
    gap: ${spacing * 8}px;
    margin: ${spacing * 10}px 0;
    ${sp} {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: ${spacing * 6}px;
    }
  `,
})
