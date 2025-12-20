
import React from 'react';
import { AppConfig } from '../types';

interface AppCardProps {
  app: AppConfig;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
    >
      {/* Decorative Gradient Background on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${app.color}`}></div>
      
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${app.color} opacity-20 blur group-hover:opacity-40 transition-opacity duration-500`}></div>
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-lg transform transition-transform duration-500 group-hover:scale-110">
          <img 
            src={app.iconUrl} 
            alt={`${app.name} icon`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
        {app.name}
      </h3>
      <p className="text-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
        {app.description}
      </p>

      {/* Bottom Arrow Indicator */}
      <div className="mt-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-300">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-white/50 group-hover:text-white transform group-hover:translate-x-0.5 transition-all" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default AppCard;
