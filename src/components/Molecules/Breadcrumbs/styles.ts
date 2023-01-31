import makeStyles from '@/styles/makeStyles'
import { css } from '@emotion/react'

export const styles = makeStyles({
  container: () => css`
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 0; // デフォルトの CSS を上書き
  `,
})
