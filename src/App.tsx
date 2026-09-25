import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import EssayPrize from './components/EssayPrize';
import Categories from './components/Categories';
import Faculty from './components/Faculty';
import GlobalReach from './components/GlobalReach';
import Admissions from './components/Admissions';
import ThinkRethink from './components/ThinkRethink';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParticleField from './components/ParticleField';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#f5f0e8] overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <ParticleField />
      
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Courses />
        <div className="section-divider" />
        <EssayPrize />
        <div className="section-divider" />
        <Categories />
        <div className="section-divider" />
        <Faculty />
        <div className="section-divider" />
        <GlobalReach />
        <div className="section-divider" />
        <Admissions />
        <ThinkRethink />
      </main>
      
      <Footer />
    </div>
  );
}
