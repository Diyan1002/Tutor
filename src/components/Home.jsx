import React from 'react';
import Navbar from './Navbar';
import Hero from '../components/Hero';
import Stats from '../components/stats';
import Courses from '../components/courses';
import People from '../components/People';
import Roadmap from '../components/Roadmap';
import Handproj from '../components/Handproj';
import Coursefee from '../components/Coursefee';
import Mentors from '../components/Mentors';
import Stories from '../components/Stories';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <People />
      <Roadmap />
      <Handproj />
      <Coursefee />
      <Mentors />
      <Stories />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;