import { ClanName } from "@/app/page";

export default function JoinSection() {
  return (
    <section id="join" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-[#3A34A4] via-[#4268B0] to-[#5A6CD8] bg-clip-text text-transparent">
          Junte-se ao Nosso Clã
        </h2>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg max-w-2xl mx-auto">
          <div className="mobile-content skew-x-12">
            <p className="text-[#F3F9FE] mb-6">
              Pronto para fazer parte de algo lendário? Junte-se ao <ClanName /> e
              experimente Smash Legends no seu melhor!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#423D77] bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Requisitos
                </h3>
                <ul className="text-[#BCB099] text-sm text-left list-disc list-inside">
                  <li>Rank Diamante ou superior</li>
                  <li>Participação diária ativa</li>
                  <li>Mentalidade voltada para equipe</li>
                  <li>Presença no Discord</li>
                </ul>
              </div>
              <div className="bg-[#423D77] bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Benefícios
                </h3>
                <ul className="text-[#BCB099] text-sm text-left list-disc list-inside">
                  <li>Treinamento profissional</li>
                  <li>Participação em torneios</li>
                  <li>Recompensas exclusivas</li>
                  <li>Comunidade de elite</li>
                </ul>
              </div>
            </div>
            <button className="transition-all ease-in-out bg-gradient-to-b from-[#00A019] to-[#3EBC00] text-white px-8 py-3 rounded hover:opacity-90 transform hover:scale-105">
              Candidate-se Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
