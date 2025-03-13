import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2E6D] via-[#2D2E6D] to-[#1D1E4D] text-[#F3F9FE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base">
              © 2024 Clã Killer Wolves. Todos os direitos reservados para o jogo{" "}
              <a
                href="https://smashlegends.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BCB099] transition-colors inline-flex items-center"
              >
                Smash Legends
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm sm:text-base mb-4">
              Contatos do Desenvolvedor - Wanderson Brito
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/wanderson-devhub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={24}
                  height={24}
                  src="images/github.png"
                  className="h-8 w-8 sm:h-6 sm:w-6"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://linkedin.com/in/wanderson-devhub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={24}
                  height={24}
                  src="images/linkedin.png"
                  className="h-8 w-8 sm:h-6 sm:w-6"
                  alt="LinkedIn"
                />
              </a>
              <a
                href={typeof window !== 'undefined' && window.innerWidth < 768 
                  ? "mailto:wanderson.brito120@gmail.com?subject=Contato via Site&body=Olá, gostaria de entrar em contato, me interessei no seu trabalho e gostaria de saber mais."
                  : "https://mail.google.com/mail/?view=cm&fs=1&to=wanderson.brito120@gmail.com&su=Contato via Site&body=Olá, gostaria de entrar em contato, me interessei no seu trabalho e gostaria de saber mais."}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={24}
                  height={24}
                  src="images/gmail.png"
                  className="h-8 w-8 sm:h-6 sm:w-6"
                  alt="Gmail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}