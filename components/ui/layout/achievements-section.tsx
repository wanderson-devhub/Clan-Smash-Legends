import { Crown } from "lucide-react"

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Crown className="h-8 w-8 text-[#4663B9] mr-2" />
            <h2 className="text-3xl font-bold bg-gradient-to-b from-[#3A34A4] via-[#4268B0] to-[#5A6CD8] bg-clip-text text-transparent">
              Nossas Conquistas
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Vitória do Torneio"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Campeonato Mundial 2024</h3>
              <p className="text-[#BCB099]">Primeiro lugar no torneio global com pontuação perfeita.</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Campeonato Regional"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Campeões Regionais</h3>
              <p className="text-[#BCB099]">Dominamos todos os torneios regionais por 3 temporadas consecutivas.</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Conquista da Equipe"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Temporada Perfeita</h3>
              <p className="text-[#BCB099]">Mantivemos 100% de taxa de vitória durante a Temporada 8.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

