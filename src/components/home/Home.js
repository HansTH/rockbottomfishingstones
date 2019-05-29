import React from 'react';
import Layout from '../layout/Layout';
import Showcase from './Showcase';
import About from './About';
import Product from './Product';
import Who from './Who';
import Contact from './Contact';

const Home = () => {
  return (
    <Layout navBarFixed={false} navLinks={navLinks}>
      <Showcase />
      <About />
      <Product />
      <Who />
      <Contact />
    </Layout>
  );
};
export default Home;

const navLinks = [
  { title: 'Wat we doen', id: 'about' },
  { title: 'Product', id: 'product' },
  { title: 'Wie we zijn', id: 'who' },
  { title: 'Contact', id: 'contact' }
];
