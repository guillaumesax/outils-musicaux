
import React from 'react';
import { CATEGORIES } from './constants';
import CategorySection from './components/CategorySection';

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Guillaumesax Workspace
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500">
          Applications
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
          Open source et modifiable à souhait
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {CATEGORIES.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      {/* Footer minimaliste sans texte */}
      <footer className="mt-24 pt-10 border-t border-zinc-100 dark:border-zinc-900 text-center">
      </footer>
    </div>
  );
};

export default App;
