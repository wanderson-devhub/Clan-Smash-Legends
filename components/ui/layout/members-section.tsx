import { useToast } from "@/hooks/use-toast";
import { CheckIcon, Crown } from "lucide-react";
import Image from "next/image";

export default function MembersSection() {
  const { toast } = useToast();
  const handleCopyId = () => {
    navigator.clipboard.writeText("ggeuy5adqudk");
  };

  return (
    <section
      id="members"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://wallpapercave.com/wp/wp13847282.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1e4d80] via-[#25276969] to-[#1d1e4d73]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-b from-[#bbbadb] via-[#cdd4f4] to-[#eaedf9] bg-clip-text text-transparent">
          Conheça Nosso Líder
        </h2>

        {/* Leader Card <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {/* Member Card 1 - Leader */}
            <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
              <div className="mobile-content skew-x-12">
                <div className="relative">
                  <Image
                    width={96}
                    height={96}
                    src="images/wolfgangleader.jpg"
                    alt="Líder do Clã"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <Crown className="absolute top-0 right-1/3 h-6 w-6 text-[#ffee39]" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  lordwolf
                </h3>
                <p className="text-[#BCB099] text-center mb-2">Líder do Clã</p>
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                    Corpo A Corpo
                  </span>
                  <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                    Assassino
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => {
                      handleCopyId();
                      toast({
                        variant: "clan",
                        title: (
                          <div className="flex items-center gap-2 p-3 rounded-lg">
                            <div className="bg-emerald-500 rounded-full p-1">
                              <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-emerald-500 font-medium">
                              ID copiado com sucesso!
                            </span>
                          </div>
                        ) as unknown as string,
                        duration: 2000,
                      });
                    }}
                    className="px-4 py-2 bg-[#423D77] rounded-lg text-[#BCB099] hover:bg-[#4964AD] transition-colors"
                  >
                    Copiar ID: #WM12345
                  </button>
                </div>
              </div>
            </div>

            {/* Member Card 2
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Membro Elite"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
              />
              <h3 className="text-xl font-bold text-white text-center mb-2">
                ShadowBlade
              </h3>
              <p className="text-[#BCB099] text-center mb-2">Membro Elite</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                  Duelista
                </span>
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                  Estrategista
                </span>
              </div>
              <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-[#423D77] rounded-lg text-[#BCB099] hover:bg-[#4964AD] transition-colors">
                  Copiar ID: #SB67890
                </button>
              </div>
            </div>
          </div>

          {/* Member Card 3
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
            <div className="mobile-content skew-x-12">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Membro Elite"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#4964AD]"
              />
              <h3 className="text-xl font-bold text-white text-center mb-2">
                ThunderStrike
              </h3>
              <p className="text-[#BCB099] text-center mb-2">Membro Elite</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                  Suporte
                </span>
                <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                  Treinador
                </span>
              </div>
              <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-[#423D77] rounded-lg text-[#BCB099] hover:bg-[#4964AD] transition-colors">
                  Copiar ID: #TS13579
                </button>
              </div>
            </div>
          </div>
          */}
          </div>
        </div>
      </div>
    </section>
  );
}
