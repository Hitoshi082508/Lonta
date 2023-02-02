import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    width: 1120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${spacing * 10}px;
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      flex-direction: column;
      width: 345px;
      gap: ${spacing * 6}px;
    }
  `,
})
