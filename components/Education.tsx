import React from 'react'
import Link from 'next/link'
import '@/styles/pages.css'

const Education = () => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className='contactInfo'>
                <h2 className="education-heading">Education</h2>
                <div className='info'>
                    <h3>Schooling</h3>
                    <p>School: SVS Vidyagiri</p>
                    <p>Location: Bantwal, Karnataka</p>
                    <p>Passing Year: 2020</p>
                    <p>Percenatge score: 96.96%</p>
                    <Link className="link"
                        href="https://schools.org.in/dakshina-kannada/29240108307/svs-english-medium-high-school-vidyagiri-bantwal.html"
                        target="_blank">
                        More about the school
                    </Link>
                </div>

                <div className='info'>
                    <h3>Pre-University Course (PUC)</h3>
                    <p>College: Aloysius Pre-University College</p>
                    <p>Location: Mangaluru, Karnataka</p>
                    <p>Passing Year: 2022</p>
                    <p>Stream: Science</p>
                    <p>Percenatge score: 96%</p>
                    <Link className="link"
                        href="https://staloysiuspuc.in/index.aspx#popup1"
                        target="_blank">
                        More about PUC
                    </Link>
                </div>

                <div className='info'>
                    <h3>Bachelor of Engineering in Computer Science</h3>
                    <p>College: AJIET (affiliated to VTU Belagavi)</p>
                    <p>Location: Mangaluru, Karnataka</p>
                    <p>Graduation Date: June 2026(Expected)</p>
                    <p><Link className="link"
                        href="https://www.ajiet.edu.in/"
                        target="_blank">
                        More about College
                    </Link></p>
                    <p><Link className="link"
                        href="https://vtu.ac.in/"
                        target="_blank">
                        More about University
                    </Link></p>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Education;
