import { horizontal, vertical } from './styles'

type SpacerProps = {
  spacing: number
  direction: 'horizontal' | 'vertical'
}

const Spacer: React.FC<SpacerProps> = ({ spacing, direction = 'vertical' }) => {
  return (
    <div
      css={direction === 'vertical' ? vertical(spacing) : horizontal(spacing)}
    />
  )
}

export default Spacer
