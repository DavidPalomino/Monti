import "./styles/App.css"
import { Header } from "./components/Header/Header"
import { Overview } from "./layouts/Overview/Overview"
import { BenefitsSection } from "./layouts/BenefitsSection/BenefitsSection"
import { SharedExpenseSteps } from "./layouts/SharedExpenseSteps/SharedExpenseSteps"
import { HeroSection } from "./layouts/HeroSection/HeroSection"
import { QA } from "./layouts/QA/QA"
function App() {

  return (
    <>
      <Header />
      <Overview />
      <BenefitsSection />
      <SharedExpenseSteps />
      <HeroSection/>
      <QA />
    </>
  )
}
// BenefitsCards genera una incompatibilidad con el deploy en Vercel
export default App
