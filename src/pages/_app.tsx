import Head from 'next/head'
import { Roboto, Space_Mono } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { BaseLayout } from '@/layouts/BaseLayout'
import '@/styles/globals.css'

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

  return (
    <>
      <Head>
        <title>Raul Gavriș</title>
        <link rel="icon" href="/hero.png" type="image/png" color="#000000" />
        <meta name="description" content="Launchpad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider attribute="class">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 1, delay: 0 }}
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
                <div className="cursor"></div>
                <div className="cursor2"></div>

                <Component {...pageProps} />
              </BaseLayout>
            </main>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}
