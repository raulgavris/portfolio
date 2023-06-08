const Button3 = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="button-3d mousehover relative z-50 flex h-[67px] w-[271px] flex-row items-center justify-center border-[2px] border-darkBlack font-raulmono text-[18px] font-normal leading-[27px] shadow-basic transition-all duration-300 focus:outline-none dark:bg-darkGray dark:text-lightGray hover:dark:bg-lightGray dark:hover:text-darkGray"
    >
      <div className="background-3d z-0 rounded-md font-raulmono dark:bg-lightGray"></div>
      <span>{text}</span>
    </button>
  )
}

export default Button3
