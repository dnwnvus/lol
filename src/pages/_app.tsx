import '@/styles/globals.css'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '700'
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </main>
    </RecoilRoot>
  )
}

export default App;