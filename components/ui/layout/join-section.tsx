import React, { useState } from "react";

export default function JoinSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = () => {
    setIsLoading(true);
    // Simula um processo de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      // Redireciona para o WhatsApp
      window.open(
        "https://wa.me/557199201132?text=Olá! Desejo entrar no clã Killer Wolves. Meu ID no jogo é: _________. Estou ciente dos requisitos e compromissos necessários para fazer parte do clã.",
        "_blank"
      );
    }, 1000);
  };

  return (
    <section id="join" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-[#3A34A4] via-[#4268B0] to-[#5A6CD8] bg-clip-text text-transparent">
          Junte-se ao Nosso Clã
        </h2>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg max-w-2xl mx-auto">
          <div className="mobile-content skew-x-12">
            <p className="text-[#F3F9FE] mb-6">
              Pronto para fazer parte de algo lendário? Junte-se ao Killer Wolves e
              experimente Smash Legends no seu melhor!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#423D77] bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Requisitos
                </h3>
                <ul className="text-[#BCB099] text-sm text-left list-disc list-inside">
                  <li>Rank Bronze ou superior</li>
                  <li>Participação diária ativa</li>
                  <li>Mentalidade voltada para equipe</li>
                  <li>Presença nos grupos</li>
                </ul>
              </div>
              <div className="bg-[#423D77] bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  +Benefícios
                </h3>
                <ul className="text-[#BCB099] text-sm text-left list-disc list-inside">
                  <li>Ambiente amigável e acolhedor</li>
                  <li>Desenvolva trabalho em equipe</li>
                  <li>Mentoria de jogadores experientes</li>
                  <li>Faça amizade com outros players</li>
                </ul>
              </div>
            </div>
            <button
              onClick={handleApply}
              disabled={isLoading}
              className="disabled:opacity-70 transition-all ease-in-out bg-gradient-to-b from-[#00A019] to-[#3EBC00] text-white px-8 py-3 rounded hover:opacity-90 transform hover:scale-105 relative"
            >
              <div className="flex items-center justify-center">
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Candidate-se agora
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
