import { HeroHomePage } from './components/custom/hero/HeroHomePage';
import { Navigation } from './components/sections/Navigation';
import { ExperienceTimeline } from './components/sections/timeline/ExperienceTimeline';
import { EducationSection } from './components/sections/education/EducationSection';
import { MyWork } from './components/sections/mywork/MyWork';

function App() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col">
      <Navigation />
      <main className="flex-1 w-full">
        <HeroHomePage />
        <MyWork />
        <ExperienceTimeline />
        <EducationSection />
      </main>
    </div>
  );
}

export default App;
