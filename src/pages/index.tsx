import NavBar from '../components/NavBar'
import Footer from '@/components/Footer';
import ContactSection from './contact';
import ProjectSection from './project';
import AboutSection from './about';
import HomeSection from './home';
import { useCallback, useState } from 'react';

enum Locale {
  FR = 'fr',
  EN = 'en',
}

export default function Home() {

  const [locale, setLocale] = useState(Locale.FR)
  const toggleLocale = useCallback(() => {
    setLocale((locale) => locale === Locale.FR ? Locale.EN : Locale.FR)
  }, [])

  return (
    <>
      <NavBar/>
      <div id='home'>
        <HomeSection />
      </div>
      <div id='about' className='md:pt-20 bg-zinc-100'>
        <AboutSection />
      </div>
      <div id='project' className='md:pt-20 bg-white'>
        <ProjectSection />
      </div>
      <div id='contact' className='md:pt-20'>
        <ContactSection />
      </div>
      <Footer/>
    </>
  )
}
