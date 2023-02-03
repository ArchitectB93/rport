import React from 'react'
import "./project.css"
import rcalc from "./rcalc.png"
import reactToDO from "./reactToDo.png"
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className='projects'>
            <div class="container">
                <Link to="https://github.com/ArchitectB93/React-calc" target="_blank">
                    <div id='rcalc'>
                        <img src={rcalc} alt="rcalc" />
                    </div>
                </Link>
                <Link to="https://github.com/ArchitectB93/to-do-app" target="_blank">
                <img src={reactToDO} alt='todo' id='todo' />
                </Link>
            </div>
        </div>
    );
}

export default Projects;