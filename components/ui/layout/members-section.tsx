import { Crown } from "lucide-react"

export default function MembersSection() {
  return (
    <section id="members" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-b from-[#2A2464] via-[#324E84] to-[#3F4C8C] bg-clip-text text-transparent">
          Nossos Membros Elite
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Member Card 1 - Leader */}
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Líder do Clã"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
                />
                <Crown className="absolute top-0 right-1/3 h-6 w-6 text-[#F3F9FE]" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">WolfMaster</h3>
              <p className="text-[#BCB099] text-center mb-2">Líder do Clã</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                  Especialista em Estratégia
                </span>
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">MVP</span>
              </div>
            </div>
          </div>

          {/* Member Card 2 */}
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Membro Elite"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
              />
              <h3 className="text-xl font-bold text-white text-center mb-2">ShadowBlade</h3>
              <p className="text-[#BCB099] text-center mb-2">Membro Elite</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">Duelista</span>
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">Estrategista</span>
              </div>
            </div>
          </div>

          {/* Member Card 3 */}
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Membro Elite"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
              />
              <h3 className="text-xl font-bold text-white text-center mb-2">ThunderStrike</h3>
              <p className="text-[#BCB099] text-center mb-2">Membro Elite</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">Suporte</span>
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">Treinador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

