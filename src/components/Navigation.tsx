import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button2 from './Button2'
import Button1 from './Button1'
import Hamburger from './Hamburger'
import IonIcon from '@reacticons/ionicons'
import { useWindowSize } from '@/lib/hooks/useWindowSize'

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false)

  const [width] = useWindowSize()

  useEffect(() => {
    if (width > 770) {
      setShowNavigation(false)
    }
  }, [width])

  return width > 770 ? (
    <div className="relative z-20 flex h-24 flex-row items-center justify-between px-1 dark:bg-rgcolor0 md:px-20">
      <div className="item-center flex flex-row items-center justify-center">
        <div
          className="mousehover relative h-14 w-14 transition-all duration-1000 active:scale-110 dark:text-rgcolor2 dark:hover:text-rgcolor6"
          // onClick={handleChangeDimension}
        >
          <span className="pointer-events-none absolute left-[23px] top-4">
            R
          </span>
        </div>
        <div
          className="mousehover ml-4 mt-2 text-2xl transition-all duration-200 hover:-rotate-6 hover:skew-x-3 hover:scale-110 active:scale-95  dark:text-rgcolor2"
          // onClick={handleThemeSwitch}
        >
          <IonIcon name="moon-outline"></IonIcon>
          {/* {theme === 'dark' && <IonIcon name="sunny-outline"></IonIcon>} */}
        </div>
      </div>

      <div className="flex flex-row space-x-10">
        <Link href="/about">
          <Button2>About</Button2>
        </Link>
        <Link href="/portfolio">
          <Button2>Portfolio</Button2>
        </Link>
        <Link href="/blog">
          <Button2>Blog</Button2>
        </Link>
        <Link href="/contact">
          <Button2>Contact</Button2>
        </Link>
        <div className="mousehover">
          <Button1>RESUME</Button1>
        </div>
      </div>
    </div>
  ) : (
    <>
      {!showNavigation && (
        <Hamburger setShowNavigation={setShowNavigation} value={true} />
      )}
      {showNavigation && (
        <>
          <div className="relative z-20 h-full w-3/6 shadow dark:bg-rgcolor1 sm:w-2/6">
            <Hamburger setShowNavigation={setShowNavigation} value={false} />
            <div className="item-center items-left mt-32 flex flex-row justify-center">
              <div className="mousehover relative h-14 w-14 transition-all duration-1000 active:scale-110 dark:text-rgcolor2 dark:hover:text-rgcolor6">
                <span className="pointer-events-none absolute left-[23px] top-4">
                  R
                </span>
              </div>
              <div
                className="mousehover ml-4 mt-2 text-2xl transition-all duration-200 hover:-rotate-6 hover:skew-x-3 hover:scale-110 active:scale-95  dark:text-rgcolor2"
                // onClick={handleThemeSwitch}
              >
                <IonIcon name="moon-outline"></IonIcon>
                {/* {theme === 'dark' && <IonIcon name="sunny-outline"></IonIcon>} */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-10 p-10">
              <Link href="/contact">
                <Button2>About</Button2>
              </Link>
              <Link href="/portfolio">
                <Button2>Portfolio</Button2>
              </Link>
              <Link href="/blog">
                <Button2>Blog</Button2>
              </Link>
              <Link href="/contact">
                <Button2>Contact</Button2>
              </Link>
              <div>
                <Button1>RESUME</Button1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navigation
