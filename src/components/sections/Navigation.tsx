import { ThemeSwitch } from '../custom/switch/ThemeSwitch';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            {/* Left Side of Navigation */}
          </div>
          <div className="flex gap-4 items-center">
            {/* Right Side of Navgation */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
