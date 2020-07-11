import React from 'react';
import Navbar from './../components/navbar';
import HomePageTitile from './../components/homepagetitle';
import Tags from './../components/tags';
import Features from './../components/features';
import Privacy from './../components/privacy';
import Tagline from './../components/tagline';
import Footer from './../components/footer';
function Home() {
  return ( 
      <div className="mainbackgroundcolor">
        <Navbar />
        <HomePageTitile />
        <Tags />
        <Features />
        <Privacy />
        <Tagline />
        <Footer />
      </div>
    
  );
}

export default Home;
