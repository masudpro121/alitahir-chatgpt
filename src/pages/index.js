import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import Chatbot from '@/components/Chatbot/Chatbot'
import { createContext,  useState } from "react"

const inter = Inter({ subsets: ['latin'] })
export const MyContext = createContext()
export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [messages, setMessages] = useState([]);
  const states = {
    showSidebar, setShowSidebar,
    messages, setMessages
  }
  return (
    <MyContext.Provider value={states}>
      <Head>
        <title>Polus AI</title>
        <meta name="description" content="Image Generate and Chatbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex'>
       <Sidebar />
       <Chatbot />
      </main>
    </MyContext.Provider>
  )
}
