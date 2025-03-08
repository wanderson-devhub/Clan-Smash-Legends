"use client";

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  WholeWord as Wolf,
  Trophy,
  Users,
  Swords,
  Target,
  Shield,
  Crown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { differenceInDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clanCreationDate = new Date("2024-03-27");
  const today = new Date();
  const daysActive = differenceInDays(today, clanCreationDate);

  useEffect(() => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } fixed top-4 right-4 z-50 max-w-md w-full bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] shadow-lg rounded-lg pointer-events-auto flex`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Perfil"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-[#F3F9FE]">
                Bem-vindo ao Clã Lord Wolf!
              </p>
              <p className="mt-1 text-sm text-[#BCB099]">
                Pronto para se juntar às lendas?
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-[#4D4B80]">
          <button
            onClick={() => toast.dismiss(t)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#BCB099] hover:text-[#F3F9FE] focus:outline-none"
          >
            Fechar
          </button>
        </div>
      </div>
    ));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1E4D] to-[#25347C]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-[#4D4B80] bg-[#1D1E4D] bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Wolf className="h-8 w-8 text-[#F3F9FE] animate-pulse-slow" />
              <span className="ml-2 text-[#F3F9FE] font-bold text-xl">
                Lord Wolf
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              >
                Sobre
              </a>
              <a
                href="#achievements"
                className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              >
                Conquistas
              </a>
              <a
                href="#members"
                className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              >
                Membros
              </a>
              <a
                href="#join"
                className="text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
              >
                Junte-se
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#4D4B80] bg-[#1D1E4D] bg-opacity-95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#achievements"
                className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conquistas
              </a>
              <a
                href="#members"
                className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Membros
              </a>
              <a
                href="#join"
                className="block px-3 py-2 text-[#F3F9FE] hover:text-[#BCB099] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Junte-se
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-8">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000&h=800"
              alt="Banner Principal"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E4D] via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
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

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
            <div className="mobile-content skew-x-12 flex flex-col items-center">
              <Trophy className="h-12 w-12 text-[#F3F9FE] mb-4" />
              <h3 className="text-2xl font-bold text-white">250+</h3>
              <p className="text-[#BCB099]">Torneios Vencidos</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
            <div className="mobile-content skew-x-12 flex flex-col items-center">
              <Users className="h-12 w-12 text-[#F3F9FE] mb-4" />
              <h3 className="text-2xl font-bold text-white">100+</h3>
              <p className="text-[#BCB099]">Membros Ativos</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
            <div className="mobile-content skew-x-12 flex flex-col items-center">
              <Swords className="h-12 w-12 text-[#F3F9FE] mb-4" />
              <h3 className="text-2xl font-bold text-white">15K+</h3>
              <p className="text-[#BCB099]">Batalhas Vencidas</p>
            </div>
          </div>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg">
            <div className="mobile-content skew-x-12 flex flex-col items-center">
              <Target className="h-12 w-12 text-[#F3F9FE] mb-4" />
              <h3 className="text-2xl font-bold text-white">98%</h3>
              <p className="text-[#BCB099]">Taxa de Vitória</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg">
            <div className="mobile-content skew-x-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-[#F3F9FE] mr-4" />
                <h2 className="text-3xl font-bold text-white">
                  Sobre Nosso Clã
                </h2>
              </div>
              <div className="text-[#F3F9FE] mb-6">
                <p className="mb-4">
                  Lord Wolf é um dos clãs mais prestigiados do Smash Legends.
                  Valorizamos trabalho em equipe, estratégia e dedicação. Nossos
                  membros são cuidadosamente selecionados para manter nossos
                  altos padrões e vantagem competitiva.
                </p>
                <p className="text-[#9ECFFF]">
                  Clã fundado em{" "}
                  {format(clanCreationDate, "dd 'de' MMMM 'de' yyyy", {
                    locale: ptBR,
                  })}
                  <br />
                  {daysActive} dias de glória e conquistas!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#423D77] bg-opacity-50 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Nossa Missão
                  </h3>
                  <p className="text-[#BCB099]">
                    Dominar a cena competitiva e fomentar uma comunidade de
                    jogadores de elite que expandem os limites do possível no
                    Smash Legends.
                  </p>
                </div>
                <div className="bg-[#423D77] bg-opacity-50 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Nossos Valores
                  </h3>
                  <p className="text-[#BCB099]">
                    Excelência, trabalho em equipe, respeito e melhoria contínua
                    são os pilares da filosofia do nosso clã.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                  <span className="text-[#BCB099]">#1 Clã Ranqueado</span>
                </div>
                <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                  <span className="text-[#BCB099]">Campeões Globais</span>
                </div>
                <div className="inline-block bg-[#423D77] border border-[#8E85A1] rounded-full px-4 py-1">
                  <span className="text-[#BCB099]">Treinamento Elite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Crown className="h-8 w-8 text-[#4663B9] mr-2" />
              <h2 className="text-3xl font-bold bg-gradient-to-b from-[#2A2464] via-[#324E84] to-[#3F4C8C] bg-clip-text text-transparent">
                Nossas Conquistas
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
              <div className="mobile-content skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800&h=450"
                  alt="Vitória do Torneio"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  Campeonato Mundial 2024
                </h3>
                <p className="text-[#BCB099]">
                  Primeiro lugar no torneio global com pontuação perfeita.
                </p>
              </div>
            </div>
            <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
              <div className="mobile-content skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800&h=450"
                  alt="Campeonato Regional"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  Campeões Regionais
                </h3>
                <p className="text-[#BCB099]">
                  Dominamos todos os torneios regionais por 3 temporadas
                  consecutivas.
                </p>
              </div>
            </div>
            <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-6 rounded-lg group hover:scale-105 transition-transform">
              <div className="mobile-content skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800&h=450"
                  alt="Conquista da Equipe"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  Temporada Perfeita
                </h3>
                <p className="text-[#BCB099]">
                  Mantivemos 100% de taxa de vitória durante a Temporada 8.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
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
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  WolfMaster
                </h3>
                <p className="text-[#BCB099] text-center mb-2">Líder do Clã</p>
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                    Especialista em Estratégia
                  </span>
                  <span className="px-2 py-1 bg-[#423D77] rounded-full text-xs text-[#BCB099]">
                    MVP
                  </span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-[#2A2464] via-[#324E84] to-[#3F4C8C] bg-clip-text text-transparent">
            Junte-se ao Nosso Clã
          </h2>
          <div className="mobile-card transform -skew-x-12 bg-gradient-to-b from-[#293C87] to-[#25347C] border-l-4 border-r-4 border-[#4964AD] p-8 rounded-lg max-w-2xl mx-auto">
            <div className="mobile-content skew-x-12">
              <p className="text-[#F3F9FE] mb-6">
                Pronto para fazer parte de algo lendário? Junte-se ao Lord Wolf
                e experimente Smash Legends no seu melhor!
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
              <button className="bg-gradient-to-b from-[#00A019] to-[#3EBC00] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity transform hover:scale-105">
                Candidate-se Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1E4D] text-[#F3F9FE] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Clã Lord Wolf. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="hover:text-[#BCB099] transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-[#BCB099] transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@lordwolf.com"
                className="hover:text-[#BCB099] transition-colors"
              >
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
