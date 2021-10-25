import Head from 'next/head'
import Script from 'next/script'

import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="root">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <Wrapper>{children}</Wrapper>
      </div>
      <Script
        async
        src="https://performance.weinstock.it/tracker.js"
        data-ackee-server="https://performance.weinstock.it"
        data-ackee-domain-id="a4d4839b-3c03-4974-a22b-1e4ada2963f1"
      />
    </>
  )
}

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
