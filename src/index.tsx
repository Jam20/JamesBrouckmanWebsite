import React from 'react'
import ReactDOM from 'react-dom'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Landing from './sections/Landing'
import Projects from './sections/Projects'

ReactDOM.render(

    <div>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
    ,
    document.getElementById('app-root'),
)
