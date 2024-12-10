import "./styles/App.css"
import { Header } from "./components/Header/Header"
import { Overview } from "./layouts/Overview/Overview"
import { BenefitsCards } from "./layouts/BenefitsCards/benefitsCards"
import { SharedExpenseSteps } from "./layouts/SharedExpenseSteps/SharedExpenseSteps"
import { HeroSection } from "./layouts/HeroSection/HeroSection"

function App() {

  return (
    <>
      <Header />
      <Overview />
      <BenefitsCards />
      <SharedExpenseSteps />
      <HeroSection/>
    </>
  )
}

export default App
