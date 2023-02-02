import { css } from '@emotion/react'

export const vertical = (spacing: number) => css`
  width: auto;
  height: ${spacing}px;
  flex-shrink: 0;
`

export const horizontal = (spacing: number) => css`
  width: ${spacing}px;
  height: auto;
  display: inline-block;
  flex-shrink: 0;
`
