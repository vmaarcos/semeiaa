'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#a4bb79] text-white px-6 py-8 flex flex-col items-center gap-2">
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/QueroDoar" className="hover:underline">Quero Doar</Link>
        <Link href="/Contato" className="hover:underline">Contato</Link>
      </nav>
      <p className="text-sm mt-4">&copy; {new Date().getFullYear()} ONG Semeia. Todos os direitos reservados.</p>
    </footer>
  )
}
