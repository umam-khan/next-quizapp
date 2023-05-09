"use client"
import { useQuizConfig } from '@/store'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
  quiz
}: {
  children: React.ReactNode,
  quiz:React.ReactNode,

}) {
  const config = useQuizConfig((state)=>state.config)
  let render = config.status === 'start' ? quiz : !config.status.length ?children:result;
  return (
    <html lang="en">
      <body className={inter.className}>{render }</body>
    </html>
  )
}
