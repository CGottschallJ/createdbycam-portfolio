import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/useTheme';

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer gap-2">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="h-6"
      />
      {/* Track icons */}

      {theme === 'dark' ? (
        <Moon className=" h-4 w-4 text-slate-300 pointer-events-none transition-opacity peer-data-[state=checked]:opacity-100 opacity-0" />
      ) : (
        <Sun className="h-4 w-4 text-yellow-500 pointer-events-none transition-opacity peer-data-[state=checked]:opacity-0 opacity-100" />
      )}
    </label>
  );
}
