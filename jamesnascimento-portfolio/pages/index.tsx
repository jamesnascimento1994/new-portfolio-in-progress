import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
