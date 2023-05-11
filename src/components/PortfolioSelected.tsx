import IonIcon from '@reacticons/ionicons'

const PortfolioSelected = ({ active }) => {
  return active ? (
    <div className="mousehover text-sm opacity-100 dark:text-lightGray">
      <IonIcon name="ellipse"></IonIcon>
    </div>
  ) : (
    <div className="mousehover text-sm opacity-50 dark:text-lightGray">
      <IonIcon name="ellipse"></IonIcon>
    </div>
  )
}

export default PortfolioSelected
