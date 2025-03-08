import { useToast } from "@/hooks/use-toast";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCopyId = () => {
    navigator.clipboard.writeText("ggeuy5adqudk");
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "#join";
    }, 1000);
  };

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/background1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1e4d80] via-[#25276969] to-[#1d1e4d73]"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="relative mb-8">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000&h=800"
            alt="Banner Principal"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-2xl backdrop-blur-[8px] filter blur-[1px]"          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4D] via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 overflow-hidden flex flex-col items-center">
            <h1 className="text-[28px] leading-tight mb-2 sm:text-4xl sm:mb-4 font-bold text-white max-w-[90%] mx-auto">
              Bem-vindo ao Clã TeenWolf
            </h1>
            <p className="text-base sm:text-lg text-white drop-shadow-lg mb-6 max-w-[90%] mx-auto">
              Junte-se ao clã mais versátil do Smash Legends
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <a
                href="#join"
                onClick={handleJoinClick}
                className="w-full sm:w-auto"
              >
                <button
                  disabled={isLoading}
                  className="w-full disabled:opacity-70 transform skew-x-12 bg-gradient-to-b from-[#168AE9] to-[#31A4FD] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  <span className="-skew-x-12 flex items-center justify-center gap-2">
                    {isLoading && (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                    Junte-se aqui
                  </span>
                </button>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto transform skew-x-12 bg-gradient-to-b from-[#4663B9] to-[#4E69C2] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity"
              >
                <span className="-skew-x-12 block">Saiba Mais</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn p-1">
          <div className="bg-[#1D1E4D] p-8 rounded-lg max-w-md w-full mx-4 sm:mx-auto animate-slideIn">
            <h2 className="text-2xl font-bold text-white mb-4">
              Informações do Clã
            </h2>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">ID do Clã:</p>
              <div className="flex items-center gap-2 bg-[#2A2B5D] p-2 rounded">
                <span className="text-white">ggeuy5adqudk</span>
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
                  className="bg-blue-500 px-3 py-1 rounded text-sm text-white hover:bg-blue-600"
                >
                  Copiar
                </button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Requisitos:</h3>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Nível mínimo: 10+</li>
                <li>Troféus: 1000+</li>
                <li>Participação ativa em eventos</li>
                <li>Comunicação nos grupos do clã</li>
              </ul>
            </div>
            <button
              onClick={() => {
                const modal = document.querySelector(".animate-fadeIn");
                const content = document.querySelector(".animate-slideIn");
                modal?.classList.remove("animate-fadeIn");
                content?.classList.remove("animate-slideIn");
                modal?.classList.add("animate-fadeOut");
                content?.classList.add("animate-slideOut");
                setTimeout(() => setIsModalOpen(false), 300);
              }}
              className="w-full bg-gradient-to-b from-[#168AE9] to-[#31A4FD] text-white px-4 py-2 rounded hover:opacity-90"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
