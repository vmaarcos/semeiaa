'use client'

import { useState } from 'react'
import Header from '@/components/Header'

const alimentos = [
  'Arroz',
  'Feijão',
  'Macarrão',
  'Óleo',
  'Açúcar',
  'Farinha',
  'Leite',
  'Café',
  'Bolacha',
  'Enlatados'
]

export default function QueroDoar() {
  const [selecionados, setSelecionados] = useState([])

  const toggleAlimento = (item) => {
    if (selecionados.includes(item)) {
      setSelecionados(selecionados.filter(i => i !== item))
    } else {
      setSelecionados([...selecionados, item])
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-8 mt-10 bg-[#a4bb79] shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 flex items-center justify-center text-[#b4631c]">
          Formulário de Doação
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="border rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="border rounded px-4 py-2"
          />

          <div>
            <p className="font-semibold mb-2">O que você deseja doar?</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {alimentos.map((item) => (
                <div
                  key={item}
                  onClick={() => toggleAlimento(item)}
                  className={`cursor-pointer px-4 py-2 rounded text-center border-2 border-[#e69557] radius-4xl font-medium ${
                    selecionados.includes(item)
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#b4631c] cursor-pointer text-white py-3 rounded hover:bg-[#8c4c14] transition"
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  )
}
