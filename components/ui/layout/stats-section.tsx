import { Trophy, Users, Swords, Target } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
          <div className="mobile-content skew-x-12 flex flex-col items-center">
            <Trophy className="h-12 w-12 text-[#F3F9FE] mb-4" />
            <h3 className="text-2xl font-bold text-white">50+</h3>
            <p className="text-[#BCB099]">Torneios Vencidos</p>
          </div>
        </div>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
          <div className="mobile-content skew-x-12 flex flex-col items-center">
            <Users className="h-12 w-12 text-[#F3F9FE] mb-4" />
            <h3 className="text-2xl font-bold text-white">20</h3>
            <p className="text-[#BCB099]">Ocupação Máxima</p>
          </div>
        </div>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
          <div className="mobile-content skew-x-12 flex flex-col items-center">
            <Swords className="h-12 w-12 text-[#F3F9FE] mb-4" />
            <h3 className="text-2xl font-bold text-white">15K+</h3>
            <p className="text-[#BCB099]">Batalhas Vencidas</p>
          </div>
        </div>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
          <div className="mobile-content skew-x-12 flex flex-col items-center">
            <Target className="h-12 w-12 text-[#F3F9FE] mb-4" />
            <h3 className="text-2xl font-bold text-white">98%</h3>
            <p className="text-[#BCB099]">Taxa de Vitória</p>
          </div>
        </div>
      </div>
    </section>
  )
}

