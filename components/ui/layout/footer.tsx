import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2E6D] via-[#2D2E6D] to-[#1D1E4D] text-[#F3F9FE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              © 2024 Clã TeenWolf. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="mb-2">Contatos do Desenvolvedor - Wanderson Brito</p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/wanderson-devhub"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={32}
                  height={32}
                  src="images/github.png"
                  className="h-6 w-6"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://linkedin.com/in/wanderson-devhub"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={32}
                  height={32}
                  src="images/linkedin.png"
                  className="h-6 w-6"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wanderson.brito120@gmail.com&su=Contato via Site&body=Olá, gostaria de entrar em contato, me interessei no seu trabalho e gostaria de saber mais."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BCB099] transition-colors"
              >
                <Image
                  width={32}
                  height={32}
                  src="images/gmail.png"
                  className="h-6 w-6"
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
