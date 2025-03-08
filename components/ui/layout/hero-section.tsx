export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000&h=800"
            alt="Banner Principal"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4D] via-transparent to-transparent rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 overflow-hidden">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-b from-[#2A2464] via-[#324E84] to-[#3F4C8C] bg-clip-text text-transparent mb-6 animate-float">
              Bem-vindo ao Clã Lord Wolf
            </h1>
            <p className="text-xl sm:text-2xl text-[#9ECFFF] drop-shadow-lg mb-8">
              Junte-se ao clã mais poderoso do Smash Legends
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="transform skew-x-12 bg-gradient-to-b from-[#168AE9] to-[#31A4FD] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity">
                <span className="-skew-x-12 block">Junte-se Agora</span>
              </button>
              <button className="transform skew-x-12 bg-gradient-to-b from-[#4663B9] to-[#4E69C2] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity">
                <span className="-skew-x-12 block">Saiba Mais</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

