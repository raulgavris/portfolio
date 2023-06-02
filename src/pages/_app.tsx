import Head from 'next/head'
import { Roboto, Space_Mono } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { BaseLayout } from '@/layouts/BaseLayout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { useEffect } from 'react'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const space_mono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spacemono',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const setupCursor = () => {
      const cursor: HTMLElement = document.querySelector('.cursor')
      const cursorinner: HTMLElement = document.querySelector('.cursor2')

      const mouseHover = document.querySelectorAll('.mousehover')

      document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      })

      document.addEventListener('mousemove', function (e) {
        const x = e.clientX
        const y = e.clientY
        cursorinner.style.left = x + 'px'
        cursorinner.style.top = y + 'px'
      })

      document.addEventListener('mousedown', function () {
        cursor.classList.add('click')
        cursorinner.classList.add('cursorinnerhover')
      })

      document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
      })

      mouseHover.forEach((item) => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('hover')
        })
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover')
        })
      })
    }
    setTimeout(() => {
      setupCursor()
    }, 500)
    const setup3DButtons = () => {
      document.querySelectorAll('.button-3d').forEach((button: HTMLElement) => {
        const bounding = button.getBoundingClientRect()

        button.addEventListener('mousemove', (e) => {
          const speed = 2
          const dy = (e.clientY - bounding.top - bounding.height / 2) / -1
          const dx = (e.clientX - bounding.left - bounding.width / 2) / 10
          button.style.setProperty('--rx', (dy * speed * 0.2).toString())
          button.style.setProperty('--ry', (dx * speed * 0.2).toString())
        })

        button.addEventListener('mouseleave', () => {
          button.style.setProperty('--rx', '0')
          button.style.setProperty('--ry', '0')
        })
      })
    }
    setTimeout(() => {
      setup3DButtons()
    }, 500)
  }, [])

  return (
    <>
      <Head>
        <title>Raul Gavriș</title>
        <link rel="icon" href="/hero.png" type="image/png" color="#000000" />
        <meta name="description" content="Launchpad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider store={store}>
        <ThemeProvider attribute="class">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{ duration: 0.5, delay: 0 }}
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                animateState: {
                  opacity: 1,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                exitState: {
                  clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                },
              }}
            >
              <main
                className={`${roboto.variable} ${space_mono.variable} font-raulroboto`}
              >
                <BaseLayout>
                  <Component {...pageProps} />
                </BaseLayout>
              </main>
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </Provider>
    </>
  )
}
