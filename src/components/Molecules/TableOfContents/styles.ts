import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: (theme) => css`
    position: sticky;
    top: 50px;
    width: 300px;
    max-height: 500px;
    border-radius: 10px;
    background-color: ${theme.color.white};
    box-shadow: ${theme.shadow.main};
    padding: ${spacing * 4}px;
    ${sp} {
      position: static;
      width: 100%;
      margin: ${spacing * 10}px 0;
    }
  `,
  tableOfContentsTitle: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    margin-bottom: ${spacing * 2}px;
  `,
  tableOfContents: (theme) => css`
    text-decoration: none;
    li::marker {
      font-size: ${theme.typography.text.size.m};
      color: ${theme.color.main};
    }
    .toc-list-item {
      margin-bottom: ${spacing * 2}px;
    }
    .toc-list {
      font-size: ${theme.typography.text.size.m};
      padding-left: ${spacing * 4}px;
    }
    .toc-link {
      :visited {
        color: ${theme.color.black};
      }
    }
    .is-active-li {
      font-weight: ${theme.typography.weight.bold};
    }
  `,
})
