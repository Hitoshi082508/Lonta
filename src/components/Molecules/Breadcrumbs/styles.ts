import { pc, sp } from '@/styles/breakpoint'
import makeStyles from '@/styles/makeStyles'
import { css } from '@emotion/react'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    justify-content: start;
    width: 100%;
    background-color: ${theme.color.gray};
    ${pc} {
      overflow-x: hidden;
    }
    ${sp} {
      overflow-x: scroll;
    }
    padding: 0; // デフォルトの CSS を上書き
  `,
})
