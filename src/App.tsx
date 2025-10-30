import { HeroHomePage } from './components/custom/hero/HeroHomePage';
import { Navigation } from './components/sections/Navigation';

function App() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col">
      <Navigation />
      <main className="flex-1 w-full">
        <HeroHomePage />
      </main>
    </div>
  );
}

export default App;
