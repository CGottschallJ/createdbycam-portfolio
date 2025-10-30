import { useEffect, useState } from 'react';

export const HeroHomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden py-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/30 dark:border-blue-400/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-10 left-20 w-16 h-16 border-2 border-purple-400/30 dark:border-purple-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-8 right-4 w-24 h-24 border-2 border-indigo-400/30 dark:border-indigo-400/20 rounded-lg -rotate-16 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400/30 dark:border-purple-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-60 left-1/3 w-12 h-12 border-2 border-pink-400/30 dark:border-pink-400/20 rotate-45 animate-float-slow" />
        {/* <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-indigo-400/30 dark:border-indigo-400/20 rounded-lg -rotate-12 animate-float" /> */}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Welcome badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 mt-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-[length:200%_auto] animate-gradient-x">
            Created By Cam
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-12 font-light transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Crafting digital experiences with{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            precision
          </span>{' '}
          and{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            passion
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-lg">
            Get In Touch
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
    </section>
  );
};
