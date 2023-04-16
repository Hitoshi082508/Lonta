import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
  `,
  titleContainer: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${spacing * 5}px;
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      margin-top: ${spacing * 2}px;
      margin-bottom: ${spacing * 2}px;
    }
  `,
  title: () => css`
    display: flex;
    gap: ${spacing * 2}px;
    align-items: center;
  `,
  titleText: (theme) => css`
    margin-bottom: ${spacing * 1}px;
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
  `,
  container: () => css`
    display: flex;
    align-items: center;
    gap: ${spacing * 8}px;
    width: 1120px;
    height: 350px;
    margin-top: ${spacing * 4}px;
    ${sp} {
      flex-direction: column;
      margin-top: 5px;
      width: 375px;
      height: 705px;
    }
  `,
  textContainer: () => css`
    ${sp} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  description: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      margin-bottom: ${spacing * 2}px;
    }
  `,
  descriptionMiddle: () => css`
    margin-bottom: ${spacing * 5}px;
    ${sp} {
      margin-bottom: 0;
    }
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    background-color: ${theme.color.main};
    color: ${theme.color.white};
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    border-radius: 50px;
  `,
  imageTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    text-align: center;
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.xs};
      margin-bottom: ${spacing * 3}px;
    }
  `,
})
