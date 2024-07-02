import React from 'react';
import { DiJavascript } from 'react-icons/di';
import {
    FaPython,
    FaCode,
    FaHtml5,
    FaCss3Alt,
    FaDatabase,
    FaGit,
    FaTools,
    FaChartBar,
    FaNode,
    FaReact,
    FaJs,
    FaDocker,
    FaAws,
} from 'react-icons/fa';

const Skills = () => {
    const calculateProgress = (percentage: number) => {
        return {
            width: `${percentage}%`,
            backgroundColor: percentage > 70 ? '#4CAF50' : percentage > 40 ? '#FFC107' : '#f44336'
        };
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="skills">
                <h2 className="skills-heading">Skills</h2>

                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul className="skill-list">
                        <li className="skill-item">
                            <FaPython className="skill-icon" /> Python
                            <div className="progress-bar" style={calculateProgress(80)}></div>
                        </li>
                        <li className="skill-item">
                            <FaCode className="skill-icon" /> C++
                            <div className="progress-bar" style={calculateProgress(75)}></div>
                        </li>
                        <li className="skill-item">
                            <FaCode className="skill-icon" /> C
                            <div className="progress-bar" style={calculateProgress(65)}></div>
                        </li>
                        <li className="skill-item">
                            Scratch
                            <div className="progress-bar" style={calculateProgress(50)}></div>
                        </li>
                        <li className="skill-item">
                            <FaJs className="skill-icon" /> Next.js
                            <div className="progress-bar" style={calculateProgress(80)}></div>
                        </li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Web Development</h3>
                    <ul className="skill-list">
                        <li className="skill-item">
                            <FaHtml5 className="skill-icon" /> HTML
                            <div className="progress-bar" style={calculateProgress(90)}></div>
                        </li>
                        <li className="skill-item">
                            <FaCss3Alt className="skill-icon" /> CSS
                            <div className="progress-bar" style={calculateProgress(85)}></div>
                        </li>
                        <li className="skill-item">
                            <DiJavascript className="skill-icon" /> JavaScript
                            <div className="progress-bar" style={calculateProgress(80)}></div>
                        </li>
                        <li className="skill-item">
                            <FaJs className="skill-icon" /> JSON
                            <div className="progress-bar" style={calculateProgress(70)}></div>
                        </li>
                        <li className="skill-item">
                            <FaJs className="skill-icon" /> Tailwind CSS
                            <div className="progress-bar" style={calculateProgress(70)}></div>
                        </li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Database</h3>
                    <ul className="skill-list">
                        <li className="skill-item">
                            <FaDatabase className="skill-icon" /> MongoDB
                            <div className="progress-bar" style={calculateProgress(70)}></div>
                        </li>
                        <li className="skill-item">
                            <FaDatabase className="skill-icon" /> Firebase
                            <div className="progress-bar" style={calculateProgress(75)}></div>
                        </li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Other Skills</h3>
                    <ul className="skill-list">
                        <li className="skill-item">
                            <FaGit className="skill-icon" /> Version Control (Git)
                            <div className="progress-bar" style={calculateProgress(85)}></div>
                        </li>
                        <li className="skill-item">
                            <FaTools className="skill-icon" /> Problem Solving
                            <div className="progress-bar" style={calculateProgress(90)}></div>
                        </li>
                        <li className="skill-item">
                            <FaChartBar className="skill-icon" /> Marketing
                            <div className="progress-bar" style={calculateProgress(75)}></div>
                        </li>
                        <li className="skill-item">
                            <FaReact className="skill-icon" /> React
                            <div className="progress-bar" style={calculateProgress(80)}></div>
                        </li>
                        <li className="skill-item">
                            <FaNode className="skill-icon" /> Node.js
                            <div className="progress-bar" style={calculateProgress(75)}></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Skills;
