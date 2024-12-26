import "./styles/App.css"
import { Header } from "./components/Header/Header"
import { Overview } from "./layouts/Overview/Overview"
import { BenefitsSection } from "./layouts/BenefitsSection/BenefitsSection"
import { SharedExpenseSteps } from "./layouts/SharedExpenseSteps/SharedExpenseSteps"
import { HeroSection } from "./layouts/HeroSection/HeroSection"
import { QA } from "./layouts/QA/QA"
import { Experiences } from "./layouts/Experiences/Experiences"
import { GroupExpensesHero } from "./layouts/GroupExpensesHero/GroupExpensesHero"
import { Footer } from "./components/Footer/Footer"
import { useState, useRef } from "react"

function App() {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);

  const benefitsRef = useRef(null);
  const howWorksRef = useRef(null);
  const FAQRef = useRef(null);

  const handleScroll = (section) => {
    if (section === "benefits" && benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if(section === "HowWorks" && howWorksRef.current){
      howWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }else if(section === "FAQ" && FAQRef.current){
      FAQRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  window.addEventListener("resize", () => {
    setViewportWidth(document.documentElement.clientWidth);
  });
  return (
    <section className="App__container">
      <Header className="header" viewportWidth={viewportWidth} onScroll={handleScroll} />
      <Overview className="overview" viewportWidth={viewportWidth} />
      <BenefitsSection className="benefits-section" viewportWidth={viewportWidth} ref={benefitsRef} id="benefits"/>
      <SharedExpenseSteps className="shared-expense-steps" viewportWidth={viewportWidth} ref={howWorksRef} id="HowWorks"/>
      <HeroSection className="hero-section" viewportWidth={viewportWidth} />
      <QA className="qa" viewportWidth={viewportWidth} ref={FAQRef} id="FAQ"/>
      <Experiences className="experiences" viewportWidth={viewportWidth} />
      <GroupExpensesHero className="group-expenses-hero" viewportWidth={viewportWidth} />
      <Footer className="footer" viewportWidth={viewportWidth} onScroll={handleScroll}/>
    </section>
  )
}

export default App
