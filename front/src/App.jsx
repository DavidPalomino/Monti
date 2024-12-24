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
import { useState } from "react"

function App() {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  
  window.addEventListener("resize", () => {
    setViewportWidth(document.documentElement.clientWidth);
  });
  return (
    <section className="App__container">
      <Header className="header" viewportWidth={viewportWidth} />
      <Overview className="overview" viewportWidth={viewportWidth} />
      <BenefitsSection className="benefits-section" viewportWidth={viewportWidth} />
      <SharedExpenseSteps className="shared-expense-steps" viewportWidth={viewportWidth} />
      <HeroSection className="hero-section" viewportWidth={viewportWidth} />
      <QA className="qa" viewportWidth={viewportWidth} />
      <Experiences className="experiences" viewportWidth={viewportWidth} />
      <GroupExpensesHero className="group-expenses-hero" viewportWidth={viewportWidth} />
      {/* <Footer className="footer" viewportWidth={viewportWidth} /> */}
    </section>
  )
}

export default App
