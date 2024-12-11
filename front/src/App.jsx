import "./styles/App.css"
import { Header } from "./components/Header/Header"
import { Overview } from "./layouts/Overview/Overview"
import { BenefitsSection } from "./layouts/BenefitsSection/BenefitsSection"
import { SharedExpenseSteps } from "./layouts/SharedExpenseSteps/SharedExpenseSteps"
import { HeroSection } from "./layouts/HeroSection/HeroSection"
import { QA } from "./layouts/QA/QA"
import { Experiences } from "./layouts/Experiences/Experiences"
import { GroupExpensesHero } from "./layouts/GroupExpensesHero/GroupExpensesHero"

function App() {

  return (
    <>
      <Header />
      <Overview />
      <BenefitsSection />
      <SharedExpenseSteps />
      <HeroSection/>
      <QA />
      <Experiences />
      <GroupExpensesHero/>
    </>
  )
}
// BenefitsCards genera una incompatibilidad con el deploy en Vercel
export default App
