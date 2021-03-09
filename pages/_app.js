import '@/css/tailwind.css'
import {ThemeProvider} from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/layout-wrapper'

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
