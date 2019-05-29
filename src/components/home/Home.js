import React from 'react';
import Layout from '../layout/Layout';
import Showcase from './Showcase';
import About from './About';
import Product from './Product';
import Who from './Who';
import Contact from './Contact';

const Home = () => {
  return (
    <Layout>
      <Showcase />
      <About />
      <Product />
      <Who />
      <Contact />
    </Layout>
  );
};

export default Home;
