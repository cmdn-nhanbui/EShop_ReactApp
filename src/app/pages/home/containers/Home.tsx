import { HeaderBanner } from "../../../shared/components/HeaderBanner";
import { SectionBanner } from "../components/SectionBanner";
import { SectionChoosing } from "../components/SectionChoosing";
import { SelectedSection } from "../components/SelectedSection";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <main>
        <SectionBanner />
        <SelectedSection />
        <SectionChoosing />
      </main>
    </div>
  );
};

export default Home;
