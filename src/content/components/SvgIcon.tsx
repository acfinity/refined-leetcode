import { SCProps, StyledComponent } from './utils'

interface OwnSvgIconProps {
  children?: React.ReactNode
  height?: number
}
export type SvgIconProps = SCProps<OwnSvgIconProps, 'svg'>
export type SvgIconType = StyledComponent<OwnSvgIconProps, 'svg'>

const SvgIcon: SvgIconType = ({ children, height = 24, ...props }) => {
  return (
    <svg {...props} viewBox="0 0 24 24" height={height} fill="currentColor">
      {children}
    </svg>
  )
}

export default SvgIcon
