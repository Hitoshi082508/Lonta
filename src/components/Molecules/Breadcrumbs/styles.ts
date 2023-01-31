import makeStyles from '@/styles/makeStyles'
import { css } from '@emotion/react'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    justify-content: start;
    width: 100%;
    background-color: ${theme.color.gray};
    padding: 0; // デフォルトの CSS を上書き
  `,
})
