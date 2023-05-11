const Hamburger = ({ setShowNavigation, value }) => {
  return (
    <button
      onClick={() => {
        setShowNavigation(value)
      }}
      className="fixed right-10 top-10 z-10 "
    >
      <div className="group flex h-10 w-10 flex-col items-end justify-end space-y-2">
        <span className="relative block h-0.5 w-10 dark:bg-lightGray"></span>
        <span className="relative block h-0.5 w-8 dark:bg-lightGray"></span>
        <span className="relative block h-0.5 w-5 dark:bg-lightGray"></span>
      </div>
    </button>
  )
}

export default Hamburger
