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

function App() {

  return (
    <section className="App__container">
      <Header className="header"/>
      <Overview className="overview"/>
      <BenefitsSection className="benefits-section"/>
      <SharedExpenseSteps className="shared-expense-steps"/>
      <HeroSection className="hero-section"/>
      <QA className="qa"/>
      <Experiences className="experiences"/>
      <GroupExpensesHero className="group-expenses-hero"/>
      <Footer className="footer"/>
    </section>
  )
}

export default App
