import React from 'react';
import About from '@/components/about'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Certificates from '@/components/certificates'
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

const Main = () => {
    return (
        <div>
            <About/>
            <Education/>
            <Skills/>
            <Certificates/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
};

export default Main;
