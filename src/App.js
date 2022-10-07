import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Volunteering from './components/volunteering/Volunteering';
import Workexp from './components/workexp/Workexp';
import Exp from './components/exp/Exp';
import Projects from './components/projects/Projects';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className = 'main'>
      <Home />
      <About />
      <Exp />
      <Workexp/>
      <Volunteering />
      <Projects />
    </main>
    </>
  )
}

export default App