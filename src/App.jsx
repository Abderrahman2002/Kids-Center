import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatWeOffer from './components/WhatWeOffer';
import FactsAndFigures from './components/FactsAndFigures';
import PopularCourses from './components/PopularCourses';
import Gallery from './components/Gallery';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero />
      <Features />
      <WhatWeOffer />
      <FactsAndFigures />
      <PopularCourses />
      <Gallery/>
      <Teachers />
      <Testimonials/>
      <Blogs />
      <br />
      <br />
      <br />
      <Sponsors />
    </div>
  );
};

export default App;