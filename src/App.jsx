import './App.css'
import { Button } from './components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import SecondPage from './components/SecondPage/SecondPage'
import Services from './components/Services/Services'
import ServicesPage from './components/Services/ServicesPage'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
import LastPage from './components/LastPage/LastPage'
import NewPage from './components/Home/NewPage'
import GiveBackPage from './components/GiveBack/GiveBackPage'
import CommunityProjects from './components/CommunityProjects/CommunityProjects'
import TalentPage from './components/TalentPage/TalentPage'
import RolesList from './components/RolesList/RolesList'
import ContactForm from './components/ContactForm/ContactForm'
import SpicyCTA from './components/SpicyRED/SpicyCTA'
import Footer from './components/Footer'
import ClientsSection from './components/ClientsSection/ClientsSection'
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <SecondPage />
      <Services />
      <ServicesPage />
      <WhoWeAre />
      <LastPage />
      <NewPage />
      <GiveBackPage />
      <CommunityProjects />
      <TalentPage />
      <RolesList />
      <ClientsSection />
      <ContactForm />
      <SpicyCTA />
      <Footer />
    </div>
  )
}

export default App
