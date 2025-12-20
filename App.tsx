
import React from 'react';
import { DASHBOARD_APPS } from './constants';
import AppCard from './components/AppCard';
import BackgroundDecor from './components/BackgroundDecor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden selection:bg-purple-500/30 selection:text-white">
      <BackgroundDecor />

      {/* Header Section */}
      <header className="mb-16 text-center animate-[fadeIn_0.8s_ease-out]">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4 tracking-tighter">
          Les applications
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed px-4">
          Votre Portail centralisé
        </p>
      </header>

      {/* Main Grid */}
      <main className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DASHBOARD_APPS.map((app, index) => (
            <div 
              key={app.id} 
              className="animate-[slideUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Meta info */}
      <footer className="mt-20 text-gray-600 text-sm font-light tracking-widest uppercase flex flex-col items-center gap-2">
        <span>© 2026 - Liste d'applications développées par Guillaume Sax</span>
        <div className="flex gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;