import { useState } from "react";
import Navbar from './components/Navbar'
import IntroCard from "./components/IntroCard"
import Projects from "./components/Projects"
import EducationTimeline from "./components/EducationTimeline";

function App() {
   const [flashSkill, setFlashSkill] = useState(null);

   const triggerFlash = (skill) => {
      setFlashSkill(skill);

   const projectsSection = document.getElementById("projects");
      if (projectsSection) {
         projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }

      setTimeout(() => {
         setFlashSkill(null);
      }, 1000);
   };

   return (
      <>
         <Navbar />
         <IntroCard onSkillClick={triggerFlash} />
         <Projects flashSkill={flashSkill} />
         <EducationTimeline />
      </>
   )
}

export default App
