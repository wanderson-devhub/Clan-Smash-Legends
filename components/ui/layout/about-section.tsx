import { Shield } from "lucide-react"
import { differenceInDays, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ClanName } from "@/app/page"

export default function AboutSection() {
  const clanCreationDate = new Date("2024-03-27")
  const today = new Date()
  const daysActive = differenceInDays(today, clanCreationDate)

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1d1e4d80] via-[#25276969] to-[#1d1e4d73]">
      <div className="max-w-7xl mx-auto">
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg">
          <div className="mobile-content skew-x-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-[#F3F9FE] mr-4" />
              <h2 className="text-3xl font-bold text-white">Sobre Nosso Clã</h2>
            </div>
            <div className="text-[#F3F9FE] mb-6">
              <p className="mb-4">
                <ClanName /> é um dos clãs mais prestigiados do Smash Legends. Valorizamos trabalho em equipe, estratégia e
                dedicação. Nossos membros são cuidadosamente selecionados para manter nossos altos padrões e vantagem
                competitiva.
              </p>
              <p className="text-[#9ECFFF]">
                Clã fundado em{" "}
                {format(clanCreationDate, "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
                <br />
                {daysActive} dias de glória e conquistas!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#423D77] bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-2">Nossa Missão</h3>
                <p className="text-[#BCB099]">
                  Dominar a cena competitiva e fomentar uma comunidade de jogadores de elite que expandem os limites do
                  possível no Smash Legends.
                </p>
              </div>
              <div className="bg-[#423D77] bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-2">Nossos Valores</h3>
                <p className="text-[#BCB099]">
                  Excelência, trabalho em equipe, respeito e melhoria contínua são os pilares da filosofia do nosso clã.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                <span className="text-[#BCB099]">#1 Clã Ranqueado</span>
              </div>
              <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                <span className="text-[#BCB099]">Campeões Globais</span>
              </div>
              <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                <span className="text-[#BCB099]">Treinamento Elite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

