import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';
import HomeFeatures from '../Components/HomeFeatures';
import StudentFeedback from '../Components/StudentFeedback';
import Hero from '../Components/Hero';



function Home() {

  return (
    <>
      
      <Header />
      <Hero/>
      <AboutUs/>
      <HomeFeatures/>
      <StudentFeedback/>
      <Footer/>
    </>
  )
}

export default Home
