import iconSprite from '../../assets/images/icon-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  color?: string
}
const Icon = ({
  iconId,
  height = '30',
  viewBox = '0 0 16 16',
  width = '30',
  color = 'currentColor',
}: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox={viewBox}
    >
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

export default Icon
