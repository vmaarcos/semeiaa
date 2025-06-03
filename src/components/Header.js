'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full h-full bg-[#a4bb79] shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer hover:text-[#b4631c] text-[#8c4c14]">Semeia</h1>
      <nav className="hover:underline hover:text-[#b4631c] flex gap-6 text-[#b4631c] font-medium">
        <Link href="/"><strong>Início</strong></Link>
        <Link href="/QueroDoar"><strong>Quero Doar</strong></Link>
      </nav>
    </header>
  )
}
