import type { NextPage } from 'next'
import Head from 'next/head'
import { ConnectWallet, Web3Button } from '@thirdweb-dev/react'
import { ThirdwebNftMedia, useNFTCollection, useNFT } from '@thirdweb-dev/react'

const Home: NextPage = () => {
  const contract = useNFTCollection('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d')
  const { data: nft, isLoading } = useNFT(contract, 0)

  return (
    <div>
      <Head>
        <title>thirdweb test</title>
        <meta name="description" content="thirdweb test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen w-full">
        <ConnectWallet />
      </div>
    </div>
  )
}

export default Home
