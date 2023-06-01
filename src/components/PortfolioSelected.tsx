import { PointSvg } from '@/components/Svg'

const PortfolioSelected = ({ active }) => {
  return active ? (
    <PointSvg className="mousehover fill-lightGray opacity-100" />
  ) : (
    <PointSvg className="mousehover fill-lightGray opacity-50" />
  )
}

export default PortfolioSelected
