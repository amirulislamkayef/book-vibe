import React from 'react';
import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;