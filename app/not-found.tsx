export default function NotFound() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 bg-gradient-to-b from-[#3A34A4] via-[#4268B0] to-[#5A6CD8] bg-clip-text text-transparent">
          404
        </h2>
        <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg max-w-2xl mx-auto">
          <div className="mobile-content skew-x-12">
            <p className="text-[#F3F9FE] text-2xl mb-6">
              Página não encontrada ☹️
            </p>
            <p className="text-[#BCB099] mb-8">
              A página que você está procurando não existe ou foi removida.
            </p>
            <a
              href="/"
              className="transition-all ease-in-out bg-gradient-to-b from-[#00A019] to-[#3EBC00] text-white px-8 py-3 rounded hover:opacity-90 transform hover:scale-105 inline-block"
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
