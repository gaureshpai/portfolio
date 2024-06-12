"use client"

import React, { useState, useEffect } from 'react';
import GET from '../utils/certs.js';
import '@/styles/pages.css';

async function getdata() {
    try {
        const res = await GET();
        if (res) {
            const data: any[] = res;
            return data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
    } catch (error) {
        console.error("Failed to fetch data from localhost. Using fallback URL.");
    }
}

const AllCertificates = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getdata();
                if (result) setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className='Certificates'>
                <div className='headingc'>
                    <h2>Certifications and Courses</h2>
                </div>
                <div className="certification-grid">
                    {data.map((post) => (
                        <div key={post?._id} className="certification">
                            <h3>{post?.name}</h3>
                            <img src={post?.Image} alt={post?.name} />
                            <p>Provider: {post?.provider}</p>
                            <p>Date of Completion: {post?.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllCertificates;
