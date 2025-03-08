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
                src="https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Grupo WhatsApp"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Comunidade WhatsApp</h3>
              <p className="text-[#BCB099]">Grupo exclusivo disponível para membros.</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Instagram"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Instagram em Crescimento</h3>
              <p className="text-[#BCB099]">Grupo disponível para novos membros no Instagram.</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800&h=450"
                alt="Comunidade"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Respeito e Valores</h3>
              <p className="text-[#BCB099]">Comunidade baseada em respeito mútuo, ética e valores compartilhados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}