'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Code } from 'lucide-react';

interface PortfolioHeroProps {
  name?: string;
  title?: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  name = "Evanda Cahya Lailia",
  title = "Princess Singosari",
  location = "Singosari, Indonesia",
  description = "Evanda Cahya Lailia, wanita sempurna yang menjadi pasanganku untuk selamanya. ",
  skills = ["Sayangku", "Cintaku", "Cantikku", "My Future"]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-0 flex flex-col justify-center items-center text-center">
        
        {/* Main Content */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-white/20">
              HAPPY BIRTHDAY💗
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            {name}
          </h1>

          {/* Dynamic Title */}
          <div className="mb-6 h-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              {title}
            </p>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Code className="w-5 h-5" />
              <span className="font-mono text-lg">
                {skills[currentSkill]}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-gray-400 mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="group p-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <div className="flex flex-col items-center">
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
            </div>
          </button>
        </div>

        {/* Floating Skills Tags */}
        <div className="absolute top-1/2 left-10 hidden lg:block">
          <div className="space-y-4">
            {skills.slice(0, 3).map((skill, index) => (
              <div 
                key={skill}
                className={`px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 transform transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-10 hidden lg:block">
          <div className="space-y-4">
            {skills.slice(-2).map((skill, index) => (
              <div 
                key={skill}
                className={`px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 transform transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;