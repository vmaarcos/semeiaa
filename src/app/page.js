import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const pessoas = [
    { name: 'Eduardo, 23', alt: 'eduardo', src: '/eduardo.jpg' },
    { name: 'Geovana, 20', alt: 'geovana', src: '/geovana.jpg' },
    { name: 'Marea, 19', alt: 'marea', src: '/marea.jpeg' },
    { name: 'Marcos, 19', alt: 'marcos', src: '/marcos.png' },
    { name: 'Laryssa, 17', alt: 'larissa', src: '/Laryssa.jpeg' },
    { name: 'Juliane, 17', alt: 'ju', src: '/ju.jpg' }
  ]

  const imagemAjuda = '/ajuda.png'

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-12 w-full max-w-6xl">

          {/* Seção: Quem Somos? */}
          <h1 className="text-3xl font-bold text-center text-black">
            <strong>Quem Somos?</strong>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {pessoas.map((person, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-[200px] h-[300px]">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">{person.name}</p>
              </div>
            ))}
          </div>

          {/* Seção: Qual problema resolvemos? */}
          <section className="flex flex-col gap-8 mt-16">
            <h2 className="text-2xl font-bold text-black">Qual problema resolvemos?</h2>

            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <Image src={imagemAjuda} width={600} height={500} alt="Como ajudamos" />
              <h3 className="text-gray-800 text-lg max-w-xl italic stroke font-[family-name:var(--font-geist-sans)]">
                Através da sua doação, nós conectamos pessoas dispostas a ajudar com comunidades em situação de vulnerabilidade.
                As doações são organizadas com base nos dados enviados via formulário e entregues por ONGs parceiras em regiões prioritárias.
              </h3>
            </div>

            <Link href="/QueroDoar">
              <button className="bg-[#83b723] text-white px-8 py-4 cursor-pointer rounded-lg text-lg hover:bg-green-700 transition w-fit self-center sm:self-start items-center justify-center flex">
                Quero Doar
              </button>
            </Link>
          </section>


          <section className="mt-20">
  <h2 className="text-2xl font-bold text-[#664c25] text-center mb-6">🗺️ regiões com maior vulnerabilidade de fome em São Paulo</h2>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
    <Image
      src="/maps.png"
      width={600}
      height={400}
      alt="Mapa da Fome em São Paulo"
      className="rounded-lg shadow-lg"
    />
    <div className="max-w-md text-gray-800 text-base">
      <p className="mb-4">
        Mais de <strong>5,8 milhões</strong> de pessoas em São Paulo vivem em algum grau de insegurança alimentar, representando <strong>50,5%</strong> da população da cidade. Dentre essas, <strong>1,4 milhão</strong> enfrentam insegurança alimentar grave, ou seja, passam fome.
      </p>
      <p className="mb-4">
        As regiões mais afetadas incluem:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Extremo da Zona Leste</strong>: mais de 446 mil pessoas</li>
        <li><strong>Extremo da Zona Sul</strong>: aproximadamente 297 mil pessoas</li>
      </ul>
      <p>
        Essas áreas concentram a maior parte da população em situação de vulnerabilidade alimentar, evidenciando a necessidade urgente de ações solidárias e políticas públicas eficazes.
      </p>
    </div>
  </div>
</section>

<section className='mt-20'>
  <div className='text-2xl font-bold text-[#664c25] text-center mb-6'>🌱 Resumo Breve da ONG</div>
  
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
    {/* Texto primeiro */}
    <div className="max-w-md text-gray-800 text-base">
      <p className="mb-4">
      Na <strong> Semeia,</strong> acreditamos que pequenas ações podem gerar grandes mudanças. Por isso, criamos uma plataforma digital solidária que conecta pessoas físicas, agricultores e empresas dispostas a doar alimentos com comunidades periféricas em situação de vulnerabilidade aqui no estado de São Paulo.
      </p>
      <p className="mb-4">
      A nossa ideia é simples: com uma interface fácil de usar, qualquer um pode se cadastrar e doar em poucos cliques. O sistema identifica automaticamente as regiões que mais precisam, o que ajuda a organizar a logística e fazer com que os alimentos cheguem onde são realmente necessários.
Não fazemos isso sozinhos — contamos com parcerias incríveis de ONGs locais, que colocam a mão na massa e garantem que tudo seja entregue direitinho. <strong> Nosso propósito é claro: combater a fome de forma eficiente, sustentável e transparente, contribuindo com o Objetivo de Desenvolvimento Sustentável 2.1 da ONU — acabar com a fome até 2030.</strong>
</p>
    </div>

    {/* Imagem depois */}
    <Image
      src="/ong.png"
      width={600}
      height={400}
      alt="Mapa da Fome em São Paulo"
      className="rounded-lg shadow-lg"
    />
  </div>
</section>

            <Link href="/QueroDoar">
  <button className="bg-[#83b723] text-white px-8 py-4 cursor-pointer rounded-lg text-lg hover:bg-green-700 transition w-fit self-center flex items-center justify-center text-center">
    Quero Doar
  </button>
</Link>
        </main>
      </div>
      <Footer/>
    </div>

  )
}
