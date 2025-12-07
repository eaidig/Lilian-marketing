import React from 'react';
import { SlideContent } from './types';
import { 
  Camera, 
  Target, 
  TrendingUp, 
  Users, 
  Layers, 
  Database, 
  Smartphone, 
  Instagram, 
  Globe, 
  Rocket, 
  Sprout,
  Anchor,
  MousePointer2,
  BrainCircuit
} from 'lucide-react';

export const TOTAL_SLIDES = 10;

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    layout: 'cover',
    title: "MARKETING: A VERDADE POR TRÁS DO FEED",
    subtitle: "Do Varejo Físico ao Digital: 9 anos de bastidores",
    content: (
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="p-4 border-2 border-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,243,255,0.3)] mb-6 bg-neon-panel/50 backdrop-blur-sm">
          <Camera size={64} className="text-neon-cyan" />
        </div>
        <p className="text-xl md:text-2xl text-gray-400 font-mono tracking-wider">
          COM <span className="text-neon-purple font-bold">DIGLI ESTÚDIO FOTOGRÁFICO</span>
        </p>
      </div>
    )
  },
  {
    id: 2,
    layout: 'split',
    title: "O ICEBERG DO MARKETING",
    content: (
      <div className="flex flex-col h-full justify-center">
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
          O que você vê (<span className="text-neon-cyan font-bold">Foto/Vídeo</span>) é só a pontinha.
        </p>
        <div className="relative p-6 bg-neon-panel rounded-xl border border-gray-800">
          <div className="absolute -top-3 -left-3">
             <Anchor className="text-neon-purple" size={32} />
          </div>
          <p className="text-lg text-gray-400">Embaixo da água existe:</p>
          <ul className="grid grid-cols-2 gap-4 mt-4 font-mono text-sm md:text-base">
            <li className="flex items-center text-white"><div className="w-2 h-2 bg-neon-purple rounded-full mr-2"></div>Estratégia</li>
            <li className="flex items-center text-white"><div className="w-2 h-2 bg-neon-purple rounded-full mr-2"></div>Dados</li>
            <li className="flex items-center text-white"><div className="w-2 h-2 bg-neon-purple rounded-full mr-2"></div>Logística</li>
            <li className="flex items-center text-white"><div className="w-2 h-2 bg-neon-purple rounded-full mr-2"></div>Pesquisa</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    layout: 'center',
    title: "A REGRA DOS 3 SEGUNDOS",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8">
           <MousePointer2 size={80} className="text-neon-cyan animate-bounce" />
           <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
          PARE!
        </h2>
        <p className="text-xl md:text-3xl text-gray-300 max-w-3xl">
          É o tempo que temos para parar o seu dedo no feed. A imagem precisa gritar por atenção.
        </p>
      </div>
    )
  },
  {
    id: 4,
    layout: 'visual',
    title: "APPETITE APPEAL: A FOTO QUE VENDE",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-neon-panel p-6 rounded-lg border-t-4 border-neon-cyan flex flex-col items-center">
          <div className="text-4xl mb-4">💨</div>
          <h3 className="text-xl font-bold text-white mb-2">Fumaça Falsa</h3>
          <p className="text-sm text-gray-400 text-center">Para parecer recém-saído do forno.</p>
        </div>
        <div className="bg-neon-panel p-6 rounded-lg border-t-4 border-neon-purple flex flex-col items-center">
          <div className="text-4xl mb-4">🧊</div>
          <h3 className="text-xl font-bold text-white mb-2">Glicerina</h3>
          <p className="text-sm text-gray-400 text-center">Gotas perfeitas que não escorrem.</p>
        </div>
        <div className="bg-neon-panel p-6 rounded-lg border-t-4 border-neon-cyan flex flex-col items-center">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-bold text-white mb-2">Óleo</h3>
          <p className="text-sm text-gray-400 text-center">Brilho extra em carnes e molhos.</p>
        </div>
        <div className="col-span-1 md:col-span-3 text-center mt-6">
          <p className="text-2xl font-mono text-neon-purple">"O cérebro compra com os olhos."</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    layout: 'split',
    title: "COMO A MENSAGEM CHEGA?",
    content: (
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-center gap-6 p-6 bg-gray-900/50 rounded-xl border-l-4 border-green-500">
          <div className="bg-green-500/20 p-4 rounded-full">
            <Sprout size={40} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">ORGÂNICO</h3>
            <p className="text-gray-400">Como uma planta crescendo. Lento, constante, cria raízes.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 p-6 bg-gray-900/50 rounded-xl border-l-4 border-orange-500">
          <div className="bg-orange-500/20 p-4 rounded-full">
            <Rocket size={40} className="text-orange-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">TRÁFEGO PAGO</h3>
            <p className="text-gray-400">Como um foguete decolando. Rápido, explosivo, custa combustível.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    layout: 'center',
    title: "O FUNIL DE VENDAS",
    content: (
      <div className="relative w-full max-w-2xl mx-auto flex flex-col gap-2">
        <div className="w-full bg-gradient-to-r from-neon-purple to-purple-800 p-6 rounded-t-3xl text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <h3 className="text-2xl font-bold text-white">1. TOPO</h3>
          <p className="text-sm text-purple-200">Atração & Viral</p>
        </div>
        <div className="w-[80%] mx-auto bg-gradient-to-r from-purple-700 to-indigo-700 p-6 text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <h3 className="text-2xl font-bold text-white">2. MEIO</h3>
          <p className="text-sm text-indigo-200">Conteúdo & Dicas</p>
        </div>
        <div className="w-[60%] mx-auto bg-gradient-to-r from-neon-cyan to-teal-700 p-6 rounded-b-3xl text-center shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <h3 className="text-2xl font-bold text-black">3. FUNDO</h3>
          <p className="text-sm text-teal-900 font-bold">Venda & Oferta</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    layout: 'split',
    title: "LIKES NÃO PAGAM BOLETOS",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <div className="flex items-center space-x-4">
           <Database className="text-neon-cyan" size={48} />
           <p className="text-xl text-gray-300">
             Marketing não é só criatividade.
           </p>
        </div>
        
        <div className="flex w-full h-16 rounded-full overflow-hidden font-bold text-xl">
          <div className="w-1/2 bg-neon-purple flex items-center justify-center text-white shadow-[0_0_15px_#bc13fe]">
            50% ARTE
          </div>
          <div className="w-1/2 bg-neon-cyan flex items-center justify-center text-black shadow-[0_0_15px_#00f3ff]">
            50% DADOS
          </div>
        </div>

        <div className="bg-red-900/30 border border-red-500/50 p-4 rounded-lg text-center">
          <p className="text-red-200 font-mono text-lg">"Se não vendeu, o like não serviu."</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    layout: 'visual',
    title: "O PROFISSIONAL EM T",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
         <div className="relative">
            {/* The Top Bar of the T */}
            <div className="w-80 h-16 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg flex items-center justify-around text-white font-bold shadow-lg mb-2">
               <span className="text-xs md:text-sm">Redação</span>
               <span className="text-xs md:text-sm">Tráfego</span>
               <span className="text-xs md:text-sm">Pessoas</span>
               <span className="text-xs md:text-sm">Vendas</span>
            </div>
            <div className="absolute top-[-30px] w-full text-center text-neon-cyan font-mono text-sm">GENERALISTA (Entenda do todo)</div>

            {/* The Vertical Bar of the T */}
            <div className="w-24 h-64 bg-gradient-to-b from-neon-purple to-indigo-900 mx-auto rounded-b-lg flex flex-col items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(188,19,254,0.4)]">
               <span className="transform -rotate-90 whitespace-nowrap text-lg">FOTOGRAFIA</span>
            </div>
            <div className="absolute bottom-10 -right-40 text-neon-purple font-mono text-sm">ESPECIALISTA (Sua Arte)</div>
         </div>
      </div>
    )
  },
  {
    id: 9,
    layout: 'center',
    title: "COMECE AGORA",
    content: (
      <div className="flex flex-col items-center text-center space-y-8">
        <Smartphone size={100} className="text-neon-cyan animate-pulse" />
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          Use seu Instagram como laboratório.
        </h3>
        <p className="text-xl text-gray-400 max-w-2xl">
          "O melhor equipamento é o que você tem na mão."
        </p>
        <button className="px-8 py-3 bg-transparent border-2 border-neon-purple text-neon-purple rounded-full font-bold hover:bg-neon-purple hover:text-white transition-all duration-300">
          #BoraFazer
        </button>
      </div>
    )
  },
  {
    id: 10,
    layout: 'cover',
    title: "OBRIGADA!",
    subtitle: "Dúvidas? Vamos conversar!",
    content: (
      <div className="flex flex-col items-center space-y-8 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <a href="#" className="flex items-center gap-3 text-xl text-white hover:text-neon-cyan transition-colors p-4 bg-neon-panel rounded-xl border border-gray-800">
            <Instagram size={32} className="text-neon-purple" />
            @digliestudiofotografico
          </a>
          <a href="#" className="flex items-center gap-3 text-xl text-white hover:text-neon-cyan transition-colors p-4 bg-neon-panel rounded-xl border border-gray-800">
            <Globe size={32} className="text-neon-cyan" />
            digli.com.br
          </a>
        </div>
        <div className="mt-12 text-gray-500 font-mono text-sm">
          Apresentação Interativa v1.0
        </div>
      </div>
    )
  }
];