import Image, { StaticImageData } from 'next/legacy/image'
import {
  displayNone,
  getHeightWidthStyle,
  styles,
  borderRadius,
  getPercentWidth,
  getCursorStyle,
} from './styles'

type NextImageProps = {
  width: number
  height: number
  spWidth?: number
  spHeight?: number
  percentWidth?: number
  spNone?: boolean
  radius?: number
  src: string | StaticImageData
  alt: string
  cursor?: boolean
  onClick?: () => void
}

const NextImage: React.FC<NextImageProps> = ({
  width,
  height,
  spWidth,
  percentWidth,
  spHeight,
  spNone = false,
  radius,
  src,
  alt,
  cursor,
  onClick,
}) => {
  return (
    <div
      css={[
        styles.container,
        displayNone(spNone),
        getHeightWidthStyle(width, height, spWidth, spHeight),
        percentWidth && getPercentWidth(percentWidth),
        borderRadius(radius),
        cursor && getCursorStyle,
      ]}
      onClick={onClick}
    >
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default NextImage
