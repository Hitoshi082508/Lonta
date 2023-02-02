import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: ${spacing * 16}px 0;
    ${sp} {
      padding: ${spacing * 12}px 0;
    }
  `,
  container: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
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
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 7}px;
    ${sp} {
      margin-bottom: ${spacing * 6}px;
    }
  `,
  articleContainer: () => css`
    width: 1120px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${spacing * 10}px;
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      flex-direction: column;
      width: 345px;
      gap: ${spacing * 6}px;
    }
  `,
})
