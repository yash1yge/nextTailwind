import { Inter } from '@next/font/google'
import Header from '@/Components/Header/Header'
import Banner from '@/Components/Banner/Banner'
import Events from '@/Components/Events/Events'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Events />
    </>
  )
}
