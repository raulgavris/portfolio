type IconType = 'information-circle-outline'
interface InfoItemProps {
  icon: IconType
  title: string
  value: string | number
  onClick?: () => void
  className: string
}
