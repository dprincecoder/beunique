import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BeUnique | Unique & Affordable</title>
        <meta name="description" content="The most unique and affordable ecommerce store for females" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid place-items-center py-32">
        <h1 className='text-4xl font-bold font-anybody'>BeUnique</h1>
      </main>
    </>
  )
}
