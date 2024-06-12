import React from 'react'
import Certs from './Certs';
import About from './About'
import ContactInformation from './Contact';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {
  return (
    <div>{/**ids for the div to be added */}
    <About/>
    <Education/>
    <Projects/>
    <Skills/>
    <Certs/>
    <ContactInformation/>
    </div>
  )
}

export default Main